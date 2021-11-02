import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {TimeAgoModule} from "src/app/shared/modules/time-ago/time-ago.module";
import {BreakpointObserverModule} from "src/app/shared/modules/breakpoint/breakpoint-observer.module";
import {MangaModule} from "src/app/manga/manga.module";
import {ChapterListComponent} from "src/app/manga-details-page/components/chapter-list/chapter-list.component";
import {MangaPageComponent} from "src/app/manga-details-page/components/manga-page/manga-page.component";
import {MangaPageRoutingModule} from "src/app/manga-details-page/manga-page-routing.module";
import {SharedModule} from "src/app/shared/shared.module";


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
