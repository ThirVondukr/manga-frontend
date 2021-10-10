import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {UsersModule} from "src/app/users/users.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "src/app/auth/interceptors/token.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GraphQLModule} from "./graphql.module";
import {ApiRequestInterceptor} from "src/app/core/api-request.interceptor";
import {CoreModule} from "src/app/core/core.module";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        BrowserAnimationsModule,
        BrowserModule,
        GraphQLModule,
        HttpClientModule,
        UsersModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ApiRequestInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
