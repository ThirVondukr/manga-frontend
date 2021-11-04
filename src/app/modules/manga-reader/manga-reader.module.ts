import {NgModule} from "@angular/core";

import {MangaReaderRoutingModule} from "src/app/modules/manga-reader/manga-reader-routing.module";
import {ReaderComponent} from "src/app/modules/manga-reader/components";
import {SharedModule} from "src/app/modules/shared/shared.module";
import {MangaModule} from "src/app/modules/manga/manga.module";


@NgModule({
    declarations: [
        ReaderComponent
    ],
    imports: [
        MangaReaderRoutingModule,
        SharedModule,
        MangaModule,
    ]
})
export class MangaReaderModule {
}
