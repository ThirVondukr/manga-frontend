import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {UsersRoutingModule} from "src/app/modules/users/users-routing.module";
import {MangaSharedModule} from "src/app/modules/manga-shared/manga-shared.module";
import {
    UserProfileComponent,
    UserProfileMangaFollowsComponent,
    UserProfilePageComponent
} from "./components";
import {SharedModule} from "src/app/modules/shared/shared.module";


@NgModule({
    declarations: [
        UserProfileComponent,
        UserProfileMangaFollowsComponent,
        UserProfilePageComponent,
    ],
    imports: [
        UsersRoutingModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        MangaSharedModule
    ],
    providers: []
})
export class UsersModule {
}
