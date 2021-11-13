import {ChangeDetectionStrategy, Component} from "@angular/core";
import {concat, Observable, ReplaySubject} from "rxjs";
import {exhaustMap, takeWhile, tap, withLatestFrom} from "rxjs/operators";
import {GetRecentChapters_recentChapters_edges_node as RecentChapter} from "src/gql/generated/GetRecentChapters";
import {InfiniteScrollService} from "src/app/modules/shared/services";
import {ChaptersFeedService} from "src/app/modules/manga-shared/services";


@Component({
    templateUrl: "./recent-chapters-page.component.html",
    styleUrls: ["./recent-chapters-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentChaptersPageComponent {

    private readonly _PAGE_SIZE = 20;

    public readonly chapterGroups$: Observable<RecentChapter[][]>;

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
        );
        const response$ = concat(initialRequest$, infiniteScrollRequest$).pipe(
            tap(response => cursor$.next(response.pageInfo.endCursor)),
            takeWhile(response => response.pageInfo.hasNextPage, true)
        );
        this.chapterGroups$ = ChaptersFeedService.createChapterGroups(response$);
    }
}
