import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UsersRoutingModule} from "src/app/users/users-routing.module";
import {UserProfileComponent} from "src/app/users/components/user-profile/user-profile.component";
import {UserProfilePageComponent} from "src/app/users/components/user-profile-page/user-profile-page.component";
import {TimeAgoModule} from "src/app/shared/modules/time-ago/time-ago.module";
import {SharedModule} from "src/app/shared/shared.module";
import {UserProfileMangaFollowsComponent} from "src/app/users/components/profile-liked-manga/user-profile-manga-follows.component";
import {MangaModule} from "src/app/manga/manga.module";


@NgModule({
    declarations: [
        UserProfileComponent,
        UserProfilePageComponent,
        UserProfileMangaFollowsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        UsersRoutingModule,
        TimeAgoModule,
        SharedModule,
        MangaModule,
    ],
    providers: []
})
export class UsersModule {
}
