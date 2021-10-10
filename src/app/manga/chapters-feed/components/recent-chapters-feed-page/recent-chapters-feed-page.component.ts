import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Observable} from "rxjs";
import {InfiniteScrollService} from "src/app/shared/services/infinite-scroll.service";
import {ChaptersFeedService} from "src/app/manga/chapters-feed/chapters-feed.service";
import {
    GetRecentChapters_recentChapters as Response,
    GetRecentChapters_recentChapters_edges_node as RecentChapter
} from "src/app/graphql/__generated__/GetRecentChapters";
import {InfiniteScrollBase} from "src/app/shared/infinite-scroll.base";


@Component({
    templateUrl: "./recent-chapters-feed-page.component.html",
    styleUrls: ["./recent-chapters-feed-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentChaptersFeedPageComponent extends InfiniteScrollBase<RecentChapter[], Response> {
    private readonly _PAGE_SIZE = 20

    constructor(
        public readonly _chaptersService: ChaptersFeedService,
        _scroll: InfiniteScrollService,
    ) {
        super(_scroll);
        this.init();
    }

    protected initialRequest = () => this._chaptersService.recentChapters({first: this._PAGE_SIZE});

    protected infiniteScrollRequest(cursor: any): Observable<Response> {
        return this._chaptersService.recentChapters({
            first: this._PAGE_SIZE,
            after: cursor
        });
    }

    protected mapCursor = (res: Response) => res.pageInfo.endCursor;
    protected mapHasNextPage = (response: Response) => response.pageInfo.hasNextPage;
    protected mapItems = (response: Observable<Response>) => ChaptersFeedService.createChapterGroups(response);

}
