import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, switchMap, tap} from "rxjs/operators";
import {UserService} from "src/app/users/services/user.service";
import {GetUserProfile_getUserByUsername} from "src/app/graphql/__generated__/GetUserProfile";


@Component({
    templateUrl: "./user-profile-page.component.html",
    styleUrls: ["./user-profile-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfilePageComponent {
    readonly user$ = this._route.params.pipe(
        switchMap(({username}) => this._userService.getUserByUsername(username)),
        tap(async (user) => {
            if (user === null) {
                await this._router.navigateByUrl("not-found");
            }
        }),
        filter((user): user is GetUserProfile_getUserByUsername => user !== null)
    );

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
        private readonly _userService: UserService,
    ) {
    }
}
