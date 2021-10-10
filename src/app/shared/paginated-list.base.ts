import {Component, OnInit} from "@angular/core";
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {Pagination} from "__generated__/globalTypes";


export interface PagePaginationPageInfo {
    hasNext: boolean
    page: number
    pageSize: number
    totalCount: number
    totalPages: number
}

@Component({template: ""})
export abstract class PaginatedListBase<TResult, TListItem> implements OnInit {
    public result$!: Observable<TResult>;
    public items$!: Observable<TListItem[]>;
    public pageInfo$!: Observable<PagePaginationPageInfo>;
    public pagination$!: Observable<[number, number]>;
    protected _pageSize$: Observable<number> = new BehaviorSubject(10);
    protected _page$ = new BehaviorSubject(1);

    public ngOnInit() {
        this.pagination$ = combineLatest([this._page$, this._pageSize$]);
        this.result$ = this.pagination$.pipe(
            map(([page, pageSize]) => ({page, pageSize})),
            pagination => this.getResult(pagination),
            shareReplay()
        )
        this.items$ = this.result$.pipe(map(res => this.getItems(res)));
        this.pageInfo$ = this.result$.pipe(map(res => this.getPageInfo(res)));
    }

    public abstract getResult(pagination: Observable<Pagination>): Observable<TResult>;

    public abstract getItems(res: TResult): TListItem[];

    public abstract getPageInfo(res: TResult): PagePaginationPageInfo;

    public selectPage(page: number) {
        this._page$.next(page);
    }
}
