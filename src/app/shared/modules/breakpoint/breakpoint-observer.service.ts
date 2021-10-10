import {Inject, Injectable, InjectionToken} from "@angular/core";
import {fromEvent, Observable} from "rxjs";
import {debounceTime, map, shareReplay, startWith} from "rxjs/operators";


export enum BreakPoint {
    mobile = 1,
    sm,
    md,
    lg,
}

export interface BreakpointConfig {
    breakpoint: BreakPoint,
    minWidth: number
}

export const BREAKPOINT_OBSERVER_CONFIG = new InjectionToken<BreakpointConfig[]>("BREAKPOINT_OBSERVER_CONFIG");

@Injectable()
export class BreakpointObserverService {
    public breakpoint$: Observable<BreakPoint> = fromEvent(window, "resize")
        .pipe(
            startWith(this._breakPointFromWidth(window.innerWidth)),
            debounceTime(100),
            map(_ => this._breakPointFromWidth(window.innerWidth)),
            shareReplay(1)
        )

    constructor(
        @Inject(BREAKPOINT_OBSERVER_CONFIG)
        private readonly _breakpointsConfig: BreakpointConfig[],
    ) {
    }

    private _breakPointFromWidth(windowWidth: number): BreakPoint {
        return this._breakpointsConfig
            .filter(config => config.minWidth < windowWidth)
            .reduce((prev, next) => prev.minWidth > next.minWidth ? prev : next)
            .breakpoint;
    }
}
