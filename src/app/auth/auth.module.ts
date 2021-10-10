import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SignInFormComponent} from "src/app/auth/components/sign-in-form/sign-in-form.component";
import {AuthRoutingModule} from "src/app/auth/auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "src/app/shared/shared.module";
import {SignUpFormComponent} from "src/app/auth/components/sign-up-form/sign-up-form.component";
import {BaseAuthFormComponent} from "src/app/auth/components/base-auth-form/base-auth-form.component";


@NgModule({
    declarations: [
        SignInFormComponent,
        SignUpFormComponent,
        BaseAuthFormComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AuthRoutingModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class AuthModule {
}
