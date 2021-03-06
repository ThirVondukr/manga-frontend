import {NgModule} from "@angular/core";
import {MangaRoutingModule} from "./manga-routing.module";
import {
    ChapterListComponent,
    MangaBlockComponent,
    MangaHomePageComponent,
    MangaPageComponent,
    MangaStarComponent,
    PopularMangaItemComponent,
    RecentChapterItemComponent,
    RecentChaptersPageComponent,
} from "./components";
import {MangaSharedModule} from "src/app/modules/manga-shared/manga-shared.module";
import {SharedModule} from "src/app/modules/shared/shared.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        ChapterListComponent,
        MangaBlockComponent,
        MangaHomePageComponent,
        MangaPageComponent,
        MangaStarComponent,
        PopularMangaItemComponent,
        RecentChapterItemComponent,
        RecentChaptersPageComponent,
    ],
    imports: [
        MangaRoutingModule,
        SharedModule,
        MangaSharedModule,
        MatIconModule
    ]
})
export class MangaModule {
}
