import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MangaRoutingModule} from "./manga-routing.module";
import {
    ChapterGroupItem,
    ChapterGroupListComponent,
    ChapterListComponent,
    MangaBlockComponent,
    MangaHomePageComponent,
    MangaPageComponent,
    MangaStarComponent,
    PopularMangaItemComponent,
    RecentChapterItemComponent,
    RecentChaptersFeedPageComponent,
    UserChaptersFeedPageComponent
} from "./components";
import {SharedModule} from "src/app/shared/shared.module";
import {TimeAgoModule} from "src/app/shared/modules/time-ago/time-ago.module";
import {MangaSharedModule} from "src/app/modules/manga-shared/manga-shared.module";


@NgModule({
    declarations: [
        ChapterGroupItem,
        ChapterGroupListComponent,
        ChapterListComponent,
        MangaBlockComponent,
        MangaHomePageComponent,
        MangaPageComponent,
        MangaStarComponent,
        PopularMangaItemComponent,
        RecentChapterItemComponent,
        RecentChaptersFeedPageComponent,
        UserChaptersFeedPageComponent
    ],
    imports: [
        CommonModule,
        MangaRoutingModule,
        SharedModule,
        TimeAgoModule,
        MangaSharedModule
    ]
})
export class MangaModule {
}
