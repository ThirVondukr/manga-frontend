import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MangaReaderRoutingModule} from "./manga-reader-routing.module";
import {ReaderComponent} from "./components";
import {SharedModule} from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        ReaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MangaReaderRoutingModule,
    ]
})
export class MangaReaderModule {
}
