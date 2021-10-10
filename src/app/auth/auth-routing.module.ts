import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotAuthenticatedGuard} from "src/app/auth/guards/not-authenticated.guard";
import {SignInFormComponent} from "src/app/auth/components/sign-in-form/sign-in-form.component";
import {SignUpFormComponent} from "src/app/auth/components/sign-up-form/sign-up-form.component";


const routes: Routes = [
    {path: "", redirectTo: "sign-in", pathMatch: "full"},
    {path: "sign-in", component: SignInFormComponent, canActivate: [NotAuthenticatedGuard]},
    {path: "sign-up", component: SignUpFormComponent, canActivate: [NotAuthenticatedGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
