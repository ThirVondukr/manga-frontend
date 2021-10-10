import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {GetRecentChaptersQuery} from "src/app/graphql/GetRecentChaptersQuery";
import {GetRecentChapters, GetRecentChaptersVariables} from "src/app/graphql/__generated__/GetRecentChapters";
import {UserChaptersFeed, UserChaptersFeedVariables} from "src/app/graphql/__generated__/UserChaptersFeed";
import {UserChaptersFeedQuery} from "src/app/graphql/UserChaptersFeed";
import {filter, tap} from "rxjs/operators";
import {Router} from "@angular/router";


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
}
