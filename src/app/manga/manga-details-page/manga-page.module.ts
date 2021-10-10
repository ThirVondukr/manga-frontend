import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MangaPageRoutingModule} from "src/app/manga/manga-details-page/manga-page-routing.module";
import {MangaPageComponent} from "src/app/manga/manga-details-page/components/manga-page/manga-page.component";
import {SharedModule} from "src/app/shared/shared.module";
import {ChapterListComponent} from "src/app/manga/manga-details-page/components/chapter-list/chapter-list.component";
import {TimeAgoModule} from "src/app/shared/modules/time-ago/time-ago.module";
import {BreakpointObserverModule} from "src/app/shared/modules/breakpoint/breakpoint-observer.module";
import {MangaModule} from "src/app/manga/manga.module";


@NgModule({
    declarations: [
        MangaPageComponent,
        ChapterListComponent,
    ],
    imports: [
        CommonModule,
        MangaPageRoutingModule,
        SharedModule,
        TimeAgoModule,
        BreakpointObserverModule,
        MangaModule,
    ]
})
export class MangaPageModule {
}
