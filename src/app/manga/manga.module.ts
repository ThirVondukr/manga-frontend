import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MangaRoutingModule} from "src/app/manga/manga-routing.module";
import {MangaCoverComponent} from "src/app/manga/components/manga-cover/manga-cover.component";
import {MangaStarComponent} from "src/app/manga/components/manga-star/manga-star.component";
import {SharedModule} from "src/app/shared/shared.module";
import {MangaCardComponent} from "src/app/manga/components/manga-card/manga-card.component";
import {MangaInfoListComponent} from "src/app/manga/components/manga-info-list/manga-info-list.component";


@NgModule({
    declarations: [
        MangaCardComponent,
        MangaInfoListComponent,
        MangaCoverComponent,
        MangaStarComponent,
    ],
    imports: [
        CommonModule,
        MangaRoutingModule,
        SharedModule,
    ],
    exports: [
        MangaCoverComponent,
        MangaStarComponent,
        MangaInfoListComponent,
        MangaCardComponent,
    ]
})
export class MangaModule {
}
