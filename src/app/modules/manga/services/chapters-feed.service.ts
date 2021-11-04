import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {filter, map, scan, tap} from "rxjs/operators";
import {Apollo} from "apollo-angular";

import {
    GetRecentChapters,
    GetRecentChapters_recentChapters_edges as ChapterEdge,
    GetRecentChapters_recentChapters_edges_node as RecentChapter,
    GetRecentChaptersVariables
} from "src/gql/generated/GetRecentChapters";
import {
    UserChaptersFeed,
    UserChaptersFeed_getUserByUsername,
    UserChaptersFeedVariables
} from "src/gql/generated/UserChaptersFeed";
import {UserChaptersFeedQuery} from "src/gql/queries/user-chapters-feed";
import {GetRecentChaptersQuery} from "src/gql/queries/recent-chapters";

import {groupBy} from "src/app/shared/lib/group-by";


@Injectable({providedIn: "root"})
export class ChaptersFeedService {

    constructor(
        private readonly _apollo: Apollo,
        private _router: Router,
    ) {
    }

    public static createChapterGroups(data$: Observable<{ edges: ChapterEdge[] }>) {
        return data$.pipe(
            map(data => data.edges.map(edge => edge.node)),
            map(chapters => groupBy(chapters, chapter => chapter.manga.id)),
            scan((accumulator: RecentChapter[][], chapters) =>
                [...accumulator, ...chapters], [])
        );
    }

    public recentChapters(variables: GetRecentChaptersVariables) {
        return this._apollo.query<GetRecentChapters>({
            query: GetRecentChaptersQuery,
            variables,
        }).pipe(
            map(res => res.data.recentChapters),
        );
    }

    public userChapters(variables: UserChaptersFeedVariables) {
        return this._apollo.query<UserChaptersFeed>({
            query: UserChaptersFeedQuery,
            variables,
        }).pipe(
            map(res => res.data.getUserByUsername),
            tap(async user => {
                if (user === null) {
                    await this._router.navigateByUrl("/not-found");
                }
            }),
            filter((user): user is UserChaptersFeed_getUserByUsername => user !== null),
            map(user => user.chaptersFeed),
        );
    }
}
