import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignInFormComponent, SignUpFormComponent} from "./components";
import {AuthRoutingModule} from "src/app/modules/auth/auth-routing.module";
import {SharedModule} from "src/app/modules/shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        SignInFormComponent,
        SignUpFormComponent,
    ],
    imports: [
        AuthRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
})
export class AuthModule {
}
