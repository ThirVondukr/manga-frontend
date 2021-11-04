import {NgModule} from "@angular/core";
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
import {MangaSharedModule} from "src/app/modules/manga-shared/manga-shared.module";
import {SharedModule} from "src/app/modules/shared/shared.module";


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
        MangaRoutingModule,
        SharedModule,
        MangaSharedModule
    ]
})
export class MangaModule {
}
