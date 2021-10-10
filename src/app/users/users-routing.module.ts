import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserProfilePageComponent} from "src/app/users/components/user-profile-page/user-profile-page.component";


const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "login"},
    {
        path: ":username/profile",
        component: UserProfilePageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
