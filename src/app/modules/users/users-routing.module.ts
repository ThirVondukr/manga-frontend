import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserChaptersFeedPageComponent, UserProfilePageComponent} from "./components";


const routes: Routes = [
    {
        path: ":username/profile",
        component: UserProfilePageComponent,
    },
    {
        path: ":username/feed",
        component: UserChaptersFeedPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
