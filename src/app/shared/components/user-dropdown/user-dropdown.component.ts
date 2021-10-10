import {ChangeDetectionStrategy, Component} from "@angular/core";
import {AuthService} from "src/app/auth/services/auth.service";


@Component({
    selector: "app-user-dropdown",
    templateUrl: "./user-dropdown.component.html",
    styleUrls: ["./user-dropdown.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDropdownComponent {
    constructor(
        public readonly authService: AuthService,
    ) {
    }
}
