import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

import {GetUserProfile_getUserByUsername} from "src/gql/generated/GetUserProfile";


@Component({
    selector: "app-user-profile[user]",
    templateUrl: "./user-profile.component.html",
    styleUrls: ["./user-profile.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {

    @Input()
    public user!: GetUserProfile_getUserByUsername;

}
