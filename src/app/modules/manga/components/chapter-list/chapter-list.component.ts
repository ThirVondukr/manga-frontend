import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";

import {GetMangaPage_getMangaByTitleSlug} from "src/gql/generated/GetMangaPage";
import {
    GetMangaChapters_getMangaById,
    GetMangaChapters_getMangaById_chapters_items
} from "src/gql/generated/GetMangaChapters";

import {Pagination} from "src/gql/generated/globalTypes";

import {MangaService} from "../../services";
import {PaginatedListBase} from "src/app/modules/shared/models";
import {MangaRoutingService} from "src/app/routing";
import {BreakpointObserverService} from "src/app/modules/shared/services";


@Component({
    selector: "app-chapter-list[manga]",
    templateUrl: "./chapter-list.component.html",
    styleUrls: ["./chapter-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterListComponent extends PaginatedListBase<GetMangaChapters_getMangaById, GetMangaChapters_getMangaById_chapters_items> {

    protected _pageSize$ = this._breakpointObserver.breakpoint$.pipe(
        map(bp => 15 + (bp - 1) * 5)
    );

    public paginationSize$ = this._breakpointObserver.breakpoint$.pipe(
        map(bp => 3 + (bp - 1) * 4)
    )

    @Input()
    public manga!: GetMangaPage_getMangaByTitleSlug;

    constructor(
        public readonly mangaRouting: MangaRoutingService,
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
        );
    }

    public getItems(res: GetMangaChapters_getMangaById) {
        return res.chapters.items;
    }

    public getPageInfo(res: GetMangaChapters_getMangaById) {
        return res.chapters.pageInfo;
    }
}
