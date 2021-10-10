import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {GetMangaPage_getMangaByTitleSlug} from "src/app/manga/manga-details-page/graphql/__generated__/GetMangaPage";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {BreakpointObserverService} from "src/app/shared/modules/breakpoint/breakpoint-observer.service";
import {
    GetMangaChapters_getMangaById,
    GetMangaChapters_getMangaById_chapters_items
} from "src/app/manga/manga-details-page/graphql/__generated__/GetMangaChapters";
import {MangaService} from "src/app/manga/services/manga.service";
import {PaginatedListBase} from "src/app/shared/paginated-list.base";
import {Pagination} from "__generated__/globalTypes";


@Component({
    selector: "app-chapter-list[manga]",
    templateUrl: "./chapter-list.component.html",
    styleUrls: ["./chapter-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterListComponent extends PaginatedListBase<GetMangaChapters_getMangaById,
    GetMangaChapters_getMangaById_chapters_items> {

    @Input() manga!: GetMangaPage_getMangaByTitleSlug;

    public paginationSize$ = this._breakpointObserver.breakpoint$.pipe(
        map(bp => 3 + (bp - 1) * 4)
    )
    protected _pageSize$ = this._breakpointObserver.breakpoint$.pipe(map(
        bp => 15 + (bp - 1) * 5
    ));

    constructor(
        private _mangaService: MangaService,
        private _breakpointObserver: BreakpointObserverService,
    ) {
        super();
    }

    public getResult(pagination: Observable<Pagination>) {
        return pagination.pipe(
            switchMap(pagination => this._mangaService.getChapterList({
                mangaId: this.manga.id,
                ...pagination
            })),
            map(res => res.data.getMangaById!),
        )
    }

    public getItems(res: GetMangaChapters_getMangaById) {
        return res.chapters.items;
    }

    public getPageInfo(res: GetMangaChapters_getMangaById) {
        return res.chapters.pageInfo;
    }
}
