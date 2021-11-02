import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BreakpointObserverModule} from "src/app/shared/modules/breakpoint/breakpoint-observer.module";
import {SharedModule} from "src/app/shared/shared.module";
import {MangaModule} from "src/app/manga/manga.module";
import {TimeAgoModule} from "src/app/shared/modules/time-ago/time-ago.module";
import {MangaBlockComponent} from "src/app/manga-home/components/manga-block/manga-block.component";
import {MangaHomePageComponent} from "src/app/manga-home/views/manga-home-page/manga-home-page.component";
import {RecentChapterItemComponent} from "src/app/manga-home/components/recent-chapter-item/recent-chapter-item.component";
import {PopularMangaItemComponent} from "src/app/manga-home/components/popular-manga-item/popular-manga-item.component";
import {MangaHomeRoutingModule} from "src/app/manga-home/manga-home-routing.module";


@NgModule({
    declarations: [
        MangaBlockComponent,
        MangaHomePageComponent,
        RecentChapterItemComponent,
        PopularMangaItemComponent,
    ],
    exports: [
        RecentChapterItemComponent
    ],
    imports: [
        BreakpointObserverModule,
        CommonModule,
        MangaHomeRoutingModule,
        MangaModule,
        SharedModule,
        TimeAgoModule,
    ]
})
export class MangaHomeModule {
}
