import {ChangeDetectionStrategy, Component} from "@angular/core";
import {combineLatest, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {backgroundFadeAnimation} from "./background.animation";
import {openAnimation} from "./open.animation";
import {SidenavService} from "src/app/core/services";
import {MangaRoutingService} from "src/app/routing";
import {BreakPoint, BreakpointObserverService} from "src/app/modules/shared/services";


@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
    animations: [
        openAnimation,
        backgroundFadeAnimation,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {

    private readonly _unsub$ = new Subject();

    public readonly isMobile$ = this._breakpointObserver.breakpoint$.pipe(
        map(bp => bp <= BreakPoint.sm),
    );

    public readonly shouldShowBackground$ = combineLatest([
        this.isMobile$,
        this.sidebarService.isOpen$,
    ]).pipe(
        map(([isMobile, isOpen]) => isMobile && isOpen),
    );

    constructor(
        public readonly sidebarService: SidenavService,
        public readonly mangaRouting: MangaRoutingService,
        private readonly _breakpointObserver: BreakpointObserverService,
    ) {
    }

    public onBackgroundClick() {
        this.sidebarService.close()
    }
}


