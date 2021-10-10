import {Injectable} from "@angular/core";
import {fromEvent} from "rxjs";
import {auditTime, distinctUntilChanged, filter, map} from "rxjs/operators";


export interface InfiniteScrollConfig {
    distance: number,
}

@Injectable({
    providedIn: "root"
})
export class InfiniteScrollService {
    public onScrollToBottom(config: InfiniteScrollConfig = {distance: 800}) {
        return fromEvent(window, "scroll")
            .pipe(
                map(() => window.scrollY),
                distinctUntilChanged(),
                map(scroll => {
                    const {offsetHeight, clientHeight} = document.documentElement;
                    return offsetHeight - clientHeight - scroll;
                }),
                filter(distanceToBottom => distanceToBottom <= config.distance),
                auditTime(250)
            );
    }
}
