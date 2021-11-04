import {ChangeDetectionStrategy, Component, Input, Output} from "@angular/core";
import {BehaviorSubject, combineLatest, Observable, ReplaySubject} from "rxjs";
import {distinctUntilChanged, map} from "rxjs/operators";
import {clamp} from "src/app/modules/shared/helpers/clamp";


@Component({
    selector: "app-pagination-nav[totalPages][paginationSize][currentPage]",
    templateUrl: "./pagination-nav.component.html",
    styleUrls: ["./pagination-nav.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationNavComponent {

    private readonly _totalPages = new ReplaySubject<number>(1);
    private readonly totalPages$ = this._totalPages.pipe(map(pages => Math.max(1, pages)));

    public _paginationSize$ = new ReplaySubject<number>(1);

    public hasNext$: Observable<boolean>;
    public hasPrevious$: Observable<boolean>;
    public pages$: Observable<number[]>;
    public currentPage$: Observable<number>;

    @Output()
    public currentPageChange: Observable<number>;

    @Input()
    public set paginationSize(value: number) {
        this._paginationSize$.next(value);
    }

    @Input()
    set totalPages(value: number) {
        this._totalPages.next(value);
    }

    private _currentPage = new BehaviorSubject<number>(1);

    @Input()
    set currentPage(value: number) {
        this._currentPage.next(value);
    }

    constructor() {
        this.currentPage$ = combineLatest([this._currentPage, this.totalPages$]).pipe(
            map(([currentPage, totalPages]) => clamp(currentPage, 1, totalPages)),
        );
        this.currentPageChange = this.currentPage$.pipe(distinctUntilChanged());
        this.hasPrevious$ = this.currentPage$.pipe(map(page => page > 1));
        this.hasNext$ = combineLatest([this.currentPage$, this.totalPages$]).pipe(
            map(([currentPage, totalPages]) =>
                currentPage < totalPages
            )
        );
        this.pages$ = combineLatest([this.currentPage$, this.totalPages$, this._paginationSize$])
            .pipe(
                map(
                    ([currentPage, totalPages, paginationSize]) =>
                        PaginationNavComponent.pages(currentPage, totalPages, paginationSize)
                ),
            );
    }

    private static pages(currentPage: number, totalPages: number, paginationSize: number): number[] {
        const paginationSideSize = Math.floor(paginationSize / 2);
        let start = currentPage - paginationSideSize;
        let end = currentPage + paginationSideSize;
        if (start <= 0) {
            end = end + (1 - start);
            start = 1;
        }
        if (end > totalPages) {
            start = start - (end - totalPages);
            end = totalPages;
        }
        start = Math.max(1, start);

        const numbers: number[] = [];
        for (let i = start; i <= end; i++) {
            numbers.push(i)
        }
        return numbers;
    }

    public next(): void {
        this._currentPage.next(this._currentPage.value + 1);
    }

    public previous(): void {
        this._currentPage.next(this._currentPage.value - 1);
    }

    public choosePage(page: number) {
        this._currentPage.next(page);
    }
}
