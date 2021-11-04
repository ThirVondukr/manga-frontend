import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "src/app/shared/shared.module";
import {ChapterGroupListComponent} from "./components/chapter-group-list/chapter-group-list.component";
import {ChapterGroupItem} from "src/app/manga-chapters-feed/components/chapter-group-item/chapter-group-item.component";
import {RecentChaptersFeedPageComponent} from "src/app/manga-chapters-feed/components/recent-chapters-feed-page/recent-chapters-feed-page.component";
import {UserChaptersFeedPageComponent} from "src/app/manga-chapters-feed/components/user-chapters-feed-page/user-chapters-feed-page.component";
import {RecentChaptersFeedRoutingModule} from "src/app/manga-chapters-feed/recent-chapters-feed-routing.module";
import {MangaModule} from "src/app/manga/manga.module";


@NgModule({
    declarations: [
        ChapterGroupItem,
        RecentChaptersFeedPageComponent,
        UserChaptersFeedPageComponent,
        ChapterGroupListComponent,
    ],
    exports: [
        ChapterGroupItem
    ],
    imports: [
        CommonModule,
        RecentChaptersFeedRoutingModule,
        SharedModule,
        MangaModule,
    ]
})
export class RecentChaptersFeedModule {
}
