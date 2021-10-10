import {ChangeDetectionStrategy, Component} from "@angular/core";
import {exhaustMap, map, scan, takeWhile, tap, withLatestFrom} from "rxjs/operators";
import {concat, Observable, ReplaySubject} from "rxjs";
import {groupBy} from "src/app/shared/lib/group-by";
import {InfiniteScrollService} from "src/app/shared/services/infinite-scroll.service";
import {ChaptersFeedService} from "src/app/manga/chapters-feed/chapters-feed.service";
import {GetRecentChapters_recentChapters_edges_node as RecentChapter} from "src/app/graphql/__generated__/GetRecentChapters";


@Component({
    templateUrl: "./recent-chapters-feed-page.component.html",
    styleUrls: ["./recent-chapters-feed-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentChaptersFeedPageComponent {
    public readonly chapterGroups$: Observable<RecentChapter[][]>;

    private readonly _PAGE_SIZE = 20

    constructor(
        private readonly _chaptersService: ChaptersFeedService,
        private readonly _scroll: InfiniteScrollService,
    ) {
        const cursor$ = new ReplaySubject<any>(1);
        const initialRequest$ = this._chaptersService.recentChapters({first: this._PAGE_SIZE});
        const infiniteScrollRequests$ = this._scroll.onScrollToBottom({distance: 200}).pipe(
            withLatestFrom(cursor$),
            exhaustMap(([_, cursor]) => this._chaptersService.recentChapters({
                first: this._PAGE_SIZE,
                after: cursor
            }))
        );
        this.chapterGroups$ = concat(initialRequest$, infiniteScrollRequests$).pipe(
            map(res => res.data.recentChapters),
            takeWhile(data => data.pageInfo.hasNextPage, true),
            tap(data => cursor$.next(data.pageInfo.endCursor)),
            map(data => data.edges.map(edge => edge.node)),
            map(chapters => groupBy(chapters, chapter => chapter.manga.id)),
            scan((accumulator: RecentChapter[][], chapters) =>
                [...accumulator, ...chapters], [])
        );
    }
}
