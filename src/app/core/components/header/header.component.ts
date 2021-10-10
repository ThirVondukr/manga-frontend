import {ChangeDetectionStrategy, Component,} from "@angular/core";
import {AuthService} from "src/app/auth/services/auth.service";
import {AuthRoutingService} from "src/app/auth/services/auth-routing.service";
import {SidenavService} from "src/app/core/sidenav.service";


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    constructor(
        public readonly authService: AuthService,
        public readonly authRouting: AuthRoutingService,
        public readonly sidenavService: SidenavService,
    ) {
    }
}
