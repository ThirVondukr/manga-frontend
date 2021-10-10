import {NgModule} from "@angular/core";
import {
    BreakPoint,
    BREAKPOINT_OBSERVER_CONFIG,
    BreakpointConfig,
    BreakpointObserverService
} from "src/app/shared/modules/breakpoint/breakpoint-observer.service";


const breakpointConfig: BreakpointConfig[] = [
    {breakpoint: BreakPoint.mobile, minWidth: 0},
    {breakpoint: BreakPoint.sm, minWidth: 660},
    {breakpoint: BreakPoint.md, minWidth: 1024},
    {breakpoint: BreakPoint.lg, minWidth: 1280},
];

@NgModule({
    providers: [
        {
            provide: BREAKPOINT_OBSERVER_CONFIG,
            useValue: breakpointConfig,
        },
        BreakpointObserverService,
    ]
})
export class BreakpointObserverModule {
}
