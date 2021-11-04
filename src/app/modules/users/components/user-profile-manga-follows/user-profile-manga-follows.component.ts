import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {ReplaySubject} from "rxjs";
import {map, switchMap} from "rxjs/operators";

import {User} from "../../models";
import {UserLikedMangaService} from "../../services";


@Component({
    selector: "app-user-profile-manga-follows[user]",
    templateUrl: "./user-profile-manga-follows.component.html",
    styleUrls: ["./user-profile-manga-follows.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileMangaFollowsComponent {

    private readonly _user = new ReplaySubject<User>();
    private readonly FOLLOWS_AMOUNT = 12;

    public readonly followedManga$ = this._user.pipe(
        switchMap(user => this._userFollowsService.getUserMangaFollows({
            username: user.username,
            pagination: {page: 1, pageSize: this.FOLLOWS_AMOUNT},
        })),
        map(res => res.data.getUserByUsername?.followedManga.items),
    );

    @Input()
    public set user(value: User) {
        this._user.next(value);
    }

    constructor(
        private readonly _userFollowsService: UserLikedMangaService,
    ) {
    }
}
