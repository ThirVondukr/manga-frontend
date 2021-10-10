import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "src/app/core/components/header/header.component";
import {HeaderUserInfoComponent} from "src/app/core/components/header-user-info/header-user-info.component";
import {SidenavComponent} from "src/app/core/components/sidenav/sidenav.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        HeaderComponent,
        HeaderUserInfoComponent,
        SidenavComponent,
    ],
    exports: [
        SidenavComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ]
})
export class CoreModule {
}
