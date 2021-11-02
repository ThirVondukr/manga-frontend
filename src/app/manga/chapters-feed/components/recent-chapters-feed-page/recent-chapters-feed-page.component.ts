import {ChangeDetectionStrategy, Component} from "@angular/core";
import {concat, Observable, ReplaySubject} from "rxjs";
import {InfiniteScrollService} from "src/app/shared/services/infinite-scroll.service";
import {ChaptersFeedService} from "src/app/manga/chapters-feed/chapters-feed.service";
import {GetRecentChapters_recentChapters_edges_node as RecentChapter} from "src/gql/generated/GetRecentChapters";
import {exhaustMap, takeWhile, tap, withLatestFrom} from "rxjs/operators";


@Component({
    templateUrl: "./recent-chapters-feed-page.component.html",
    styleUrls: ["./recent-chapters-feed-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentChaptersFeedPageComponent {
    public readonly chapterGroups$: Observable<RecentChapter[][]>;
    private readonly _PAGE_SIZE = 20;

    constructor(
        private readonly _chaptersService: ChaptersFeedService,
        private readonly _scroll: InfiniteScrollService,
    ) {
        const cursor$ = new ReplaySubject<any>(1);
        const initialRequest$ = this._chaptersService.recentChapters({first: this._PAGE_SIZE});
        const infiniteScrollRequest$ = this._scroll.onScrollToBottom({distance: 200}).pipe(
            withLatestFrom(cursor$),
            exhaustMap(([_, cursor]) => this._chaptersService.recentChapters({
                first: this._PAGE_SIZE,
                after: cursor
            }))
        )
        const response$ = concat(initialRequest$, infiniteScrollRequest$).pipe(
            tap(response => cursor$.next(response.pageInfo.endCursor)),
            takeWhile(response => response.pageInfo.hasNextPage, true)
        )
        this.chapterGroups$ = ChaptersFeedService.createChapterGroups(response$);
    }
}
