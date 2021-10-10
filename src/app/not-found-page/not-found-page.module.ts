import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {NotFoundPageRoutingModule} from "src/app/not-found-page/not-found-page-routing.module";
import {NotFoundPageComponent} from "src/app/not-found-page/not-found-page/not-found-page.component";


@NgModule({
    declarations: [
        NotFoundPageComponent
    ],
    imports: [
        CommonModule,
        NotFoundPageRoutingModule
    ]
})
export class NotFoundPageModule {
}
