import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserProfilePageComponent} from "./components";


const routes: Routes = [
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
