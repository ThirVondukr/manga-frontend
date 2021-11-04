import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {User} from "src/app/modules/users/models/user.interface";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {UserRoutingService} from "src/app/routing";


@Component({
    selector: "app-header-user-info[user]",
    templateUrl: "./header-user-info.component.html",
    styleUrls: ["./header-user-info.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserInfoComponent {
    @Input() user!: User;

    constructor(
        public readonly authService: AuthService,
        public readonly userRouting: UserRoutingService,
    ) {
    }
}
