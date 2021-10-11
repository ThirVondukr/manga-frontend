import {concat, Observable, ReplaySubject} from "rxjs";
import {InfiniteScrollService} from "src/app/shared/services/infinite-scroll.service";
import {exhaustMap, takeWhile, tap, withLatestFrom} from "rxjs/operators";

interface PageInfo {
    hasNextPage: boolean;
    endCursor: string;
}

export abstract class InfiniteScrollBase<TResponse extends {pageInfo: PageInfo}> {
    protected _response$!: Observable<TResponse>;

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
        this._response$ = concat(this.initialRequest(), infiniteScrollRequest$).pipe(
            tap(response => cursor$.next(response.pageInfo.endCursor)),
            takeWhile(response => response.pageInfo.hasNextPage, true)
        )
    }

    protected abstract initialRequest(): Observable<TResponse>;

    protected abstract infiniteScrollRequest(cursor: any): Observable<TResponse>;
}
