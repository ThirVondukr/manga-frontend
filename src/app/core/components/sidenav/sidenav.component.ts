import {ChangeDetectionStrategy, Component} from "@angular/core";
import {SidenavService} from "src/app/core/sidenav.service";
import {openAnimation} from "src/app/core/components/sidenav/open.animation";
import {MangaRoutingService} from "src/app/modules/manga/services/manga-routing.service";
import {combineLatest, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {
    BreakPoint,
    BreakpointObserverService
} from "src/app/shared/modules/breakpoint/breakpoint-observer.service";
import {backgroundFadeAnimation} from "src/app/core/components/sidenav/background.animation";


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
    public readonly isMobile$ = this._breakpointObserver.breakpoint$.pipe(
        map(bp => bp <= BreakPoint.sm),
    )
    public readonly shouldShowBackground$ = combineLatest([
        this.isMobile$,
        this.sidebarService.isOpen$,
    ]).pipe(
        map(([isMobile, isOpen]) => isMobile && isOpen),
    );
    private readonly _unsub$ = new Subject();

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


