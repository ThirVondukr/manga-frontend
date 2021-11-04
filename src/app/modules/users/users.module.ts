import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {UsersRoutingModule} from "src/app/modules/users/users-routing.module";
import {TimeAgoModule} from "src/app/shared/modules/time-ago/time-ago.module";
import {SharedModule} from "src/app/shared/shared.module";
import {MangaModule} from "src/app/modules/manga/manga.module";
import {MangaSharedModule} from "src/app/modules/manga-shared/manga-shared.module";
import {
    UserProfileComponent,
    UserProfileMangaFollowsComponent,
    UserProfilePageComponent
} from "./components";


@NgModule({
    declarations: [
        UserProfileComponent,
        UserProfileMangaFollowsComponent,
        UserProfilePageComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        UsersRoutingModule,
        TimeAgoModule,
        SharedModule,
        MangaModule,
        MangaSharedModule
    ],
    providers: []
})
export class UsersModule {
}
