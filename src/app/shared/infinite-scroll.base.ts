import {concat, Observable, ReplaySubject} from "rxjs";
import {InfiniteScrollService} from "src/app/shared/services/infinite-scroll.service";
import {exhaustMap, takeWhile, tap, withLatestFrom} from "rxjs/operators";


export abstract class InfiniteScrollBase<TItem, TResponse> {
    public items$!: Observable<TItem[]>;
    public response$!: Observable<TResponse>;

    protected constructor(
        protected readonly _infiniteScroll: InfiniteScrollService,
    ) {
    }

    protected init() {
        const cursor$ = new ReplaySubject<any>(1);
        const infiniteScrollRequest$ = this._infiniteScroll.onScrollToBottom({distance: 200}).pipe(
            withLatestFrom(cursor$),
            exhaustMap(([_, cursor]) => this.infiniteScrollRequest(cursor))
        )
        this.response$ = concat(this.initialRequest(), infiniteScrollRequest$).pipe(
            tap(response => cursor$.next(this.mapCursor(response))),
            takeWhile(response => this.mapHasNextPage(response), true)
        )
        this.items$ = this.response$.pipe(
            response => this.mapItems(response)
        )
    }

    protected abstract initialRequest(): Observable<TResponse>;

    protected abstract infiniteScrollRequest(cursor: any): Observable<TResponse>;

    protected abstract mapItems(response: Observable<TResponse>): Observable<TItem[]>;

    protected abstract mapCursor(response: TResponse): any;

    protected abstract mapHasNextPage(response: TResponse): boolean;
}
