import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {GetUserProfile_getUserByUsername} from "src/app/graphql/__generated__/GetUserProfile";


@Component({
    selector: "app-user-profile[user]",
    templateUrl: "./user-profile.component.html",
    styleUrls: ["./user-profile.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
    @Input() user!: GetUserProfile_getUserByUsername;

    constructor() {
    }
}
