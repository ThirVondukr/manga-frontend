import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {GetRecentChaptersQuery} from "src/app/graphql/GetRecentChaptersQuery";
import {
    GetRecentChapters, GetRecentChapters_recentChapters_edges,
    GetRecentChapters_recentChapters_edges_node as RecentChapter,
    GetRecentChaptersVariables
} from "src/app/graphql/__generated__/GetRecentChapters";
import {UserChaptersFeed, UserChaptersFeedVariables} from "src/app/graphql/__generated__/UserChaptersFeed";
import {UserChaptersFeedQuery} from "src/app/graphql/UserChaptersFeed";
import {filter, map, scan, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {GetRecentChapters_recentChapters_edges as ChapterEdge} from "src/app/graphql/__generated__/GetRecentChapters";
import {Observable} from "rxjs";
import {groupBy} from "src/app/shared/lib/group-by";


@Injectable({providedIn: "root"})
export class ChaptersFeedService {
    constructor(
        private readonly _apollo: Apollo,
        private _router: Router,
    ) {
    }

    public recentChapters(variables: GetRecentChaptersVariables) {
        return this._apollo.query<GetRecentChapters>({
            query: GetRecentChaptersQuery,
            variables,
        });
    }

    public userChapters(variables: UserChaptersFeedVariables) {
        return this._apollo.query<UserChaptersFeed>({
            query: UserChaptersFeedQuery,
            variables,
        }).pipe(
            tap(async res => {
                if (res.data.getUserByUsername === null) {
                    await this._router.navigateByUrl("/not-found");
                }
            }),
            filter((res) => res.data.getUserByUsername !== null)
        );
    }

    public static createChapterGroups(data$: Observable<{edges: ChapterEdge[]}>) {
        return data$.pipe(
            map(data => data.edges.map(edge => edge.node)),
            map(chapters => groupBy(chapters, chapter => chapter.manga.id)),
            scan((accumulator: RecentChapter[][], chapters) =>
                [...accumulator, ...chapters], [])
        )
    }
}
