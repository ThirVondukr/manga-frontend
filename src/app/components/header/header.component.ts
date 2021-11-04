import {ChangeDetectionStrategy, Component,} from "@angular/core";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {SidenavService} from "src/app/core/services";
import {AuthRoutingService} from "src/app/routing";


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
