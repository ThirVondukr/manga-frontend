import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    ButtonComponent,
    IconComponent,
    PaginationNavComponent,
    UserAvatarComponent,
} from "./components";
import {CdnImageDirective} from "./directives";
import {TimeAgoPipe} from "./pipes";
import {BreakPoint, BREAKPOINT_OBSERVER_CONFIG, BreakpointConfig} from "./services";

const breakpointConfig: BreakpointConfig[] = [
    {breakpoint: BreakPoint.mobile, minWidth: 0},
    {breakpoint: BreakPoint.sm, minWidth: 660},
    {breakpoint: BreakPoint.md, minWidth: 1024},
    {breakpoint: BreakPoint.lg, minWidth: 1280},
];

@NgModule({
    declarations: [
        ButtonComponent,
        IconComponent,
        PaginationNavComponent,
        UserAvatarComponent,
        CdnImageDirective,
        TimeAgoPipe
    ],
    exports: [
        CommonModule,
        ButtonComponent,
        IconComponent,
        PaginationNavComponent,
        UserAvatarComponent,
        CdnImageDirective,
        TimeAgoPipe
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        {
            provide: BREAKPOINT_OBSERVER_CONFIG,
            useValue: breakpointConfig,
        }
    ]
})
export class SharedModule {
}
