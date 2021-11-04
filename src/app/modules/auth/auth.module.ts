import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BaseAuthFormComponent, SignInFormComponent, SignUpFormComponent} from "./components";
import {AuthRoutingModule} from "src/app/modules/auth/auth-routing.module";
import {SharedModule} from "src/app/modules/shared/shared.module";


@NgModule({
    declarations: [
        SignInFormComponent,
        SignUpFormComponent,
        BaseAuthFormComponent,
    ],
    imports: [
        AuthRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
})
export class AuthModule {
}
