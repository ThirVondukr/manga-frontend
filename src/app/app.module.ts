import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {UsersModule} from "src/app/modules/users/users.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "src/app/modules/auth/interceptors/token.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GraphQLModule} from "./graphql.module";
import {
    HeaderUserInfoComponent,
    NavbarComponent,
    NotFoundPageComponent,
    SidenavContentComponent,
} from "./components";
import {ApiRequestInterceptor} from "src/app/core/interceptors";
import {SharedModule} from "src/app/modules/shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        AppComponent,
        HeaderUserInfoComponent,
        NavbarComponent,
        NotFoundPageComponent,
        SidenavContentComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        GraphQLModule,
        HttpClientModule,
        UsersModule,
        SharedModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ApiRequestInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
