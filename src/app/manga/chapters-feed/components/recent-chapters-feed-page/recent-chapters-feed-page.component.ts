import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Observable} from "rxjs";
import {InfiniteScrollService} from "src/app/shared/services/infinite-scroll.service";
import {ChaptersFeedService} from "src/app/manga/chapters-feed/chapters-feed.service";
import {
    GetRecentChapters_recentChapters as Response,
    GetRecentChapters_recentChapters_edges_node as RecentChapter
} from "src/app/graphql/__generated__/GetRecentChapters";
import {InfiniteScrollBase} from "src/app/shared/infinite-scroll.base";
import {map} from "rxjs/operators";


@Component({
    templateUrl: "./recent-chapters-feed-page.component.html",
    styleUrls: ["./recent-chapters-feed-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentChaptersFeedPageComponent extends InfiniteScrollBase<Response> {
    private readonly _PAGE_SIZE = 20;
    public readonly chapterGroups$: Observable<RecentChapter[][]>;

    constructor(
        private readonly _chaptersService: ChaptersFeedService,
        _scroll: InfiniteScrollService,
    ) {
        super(_scroll);
        this.init();
        this.chapterGroups$ = ChaptersFeedService.createChapterGroups(this._response$);
    }

    override initialRequest = () => this._chaptersService.recentChapters({first: this._PAGE_SIZE});

    override infiniteScrollRequest(cursor: any) {
        return this._chaptersService.recentChapters({
            first: this._PAGE_SIZE,
            after: cursor
        });
    }
}
