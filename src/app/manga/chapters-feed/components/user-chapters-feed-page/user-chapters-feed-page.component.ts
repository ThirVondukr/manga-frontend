import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {filter, map, switchMap, takeWhile, tap, withLatestFrom} from "rxjs/operators";
import {ChaptersFeedService} from "src/app/manga/chapters-feed/chapters-feed.service";
import {InfiniteScrollService} from "src/app/shared/services/infinite-scroll.service";
import {concat, Observable, ReplaySubject} from "rxjs";
import {UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node} from "src/app/graphql/__generated__/UserChaptersFeed";


@Component({
    templateUrl: "./user-chapters-feed-page.component.html",
    styleUrls: ["./user-chapters-feed-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserChaptersFeedPageComponent {
    public chapterGroups$: Observable<UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node[][]>
    private readonly PAGE_SIZE = 40;

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _chaptersFeedService: ChaptersFeedService,
        private readonly _scroll: InfiniteScrollService,
    ) {
        const username$ = this._route.paramMap.pipe(
            map(params => params.get("username")),
            filter((username): username is string => username !== null),
        );

        this.chapterGroups$ = username$.pipe(
            switchMap(username => this._getChaptersFeed(username)),
        )
    }

    private _getChaptersFeed(username: string) {
        const cursor$ = new ReplaySubject<any>(1);
        const initialRequest$ = this._chaptersFeedService.userChapters({
            first: this.PAGE_SIZE,
            username,
        });
        const infiniteScrollRequest$ = this._scroll.onScrollToBottom({distance: 200}).pipe(
            withLatestFrom(cursor$),
            switchMap(([_, cursor]) => this._chaptersFeedService.userChapters({
                first: this.PAGE_SIZE,
                username,
                after: cursor,
            }))
        );

        const chaptersFeed$ = concat(initialRequest$, infiniteScrollRequest$).pipe(
            tap(feed => cursor$.next(feed.pageInfo.endCursor)),
            takeWhile(feed => feed.pageInfo.hasNextPage, true),
        );

        return ChaptersFeedService.createChapterGroups(chaptersFeed$);
    }
}
