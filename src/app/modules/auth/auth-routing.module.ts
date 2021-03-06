import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotAuthenticatedGuard} from "./guards";
import {SignInFormComponent, SignUpFormComponent} from "./components";

const routes: Routes = [
    {
        path: "sign-in",
        component: SignInFormComponent,
        canActivate: [NotAuthenticatedGuard]
    },
    {
        path: "sign-up",
        component: SignUpFormComponent,
        canActivate: [NotAuthenticatedGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
