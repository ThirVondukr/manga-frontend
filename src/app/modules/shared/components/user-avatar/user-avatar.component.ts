import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input} from "@angular/core";
import {User} from "src/app/modules/users/models/user.interface";
import {environment} from "src/environments/environment";
import {CoerceBoolean} from "src/app/modules/shared/helpers/coerce-boolean";
import {Router} from "@angular/router";
import {UserRoutingService} from "src/app/routing";


@Component({
    selector: "img[app-user-avatar][user]",
    templateUrl: "./user-avatar.component.html",
    styleUrls: ["./user-avatar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatarComponent {
    @Input() user!: User;

    @Input()
    @CoerceBoolean()
    clickable = false;

    @HostBinding("src")
    public get avatarUrl(): string {
        return `${environment.cdnUrl}/${this.user.avatarUrl}`
    }

    constructor(
        private readonly _userRouting: UserRoutingService,
        private readonly _router: Router,
    ) {
    }

    @HostBinding("[class.clickable]")
    public isClickable() {
        return this.clickable;
    }

    @HostListener("click")
    private async onClick() {
        if (!this.clickable)
            return;
        await this._router.navigate(this._userRouting.userProfile(this.user.username));
    }
}
