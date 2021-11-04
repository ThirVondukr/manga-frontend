import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MangaReaderRoutingModule} from "./manga-reader-routing.module";
import {ReaderComponent} from "./components";
import {SharedModule} from "src/app/shared/shared.module";
import {MangaModule} from "src/app/manga/manga.module";


@NgModule({
    declarations: [
        ReaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MangaReaderRoutingModule,
        MangaModule,
    ]
})
export class MangaReaderModule {
}
