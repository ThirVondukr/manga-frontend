import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChapterGroupItemComponent, ChapterGroupListComponent, MangaInfoListComponent} from "./components";
import {RouterModule} from "@angular/router";
import {SharedModule} from "src/app/modules/shared/shared.module";


@NgModule({
    declarations: [
        MangaInfoListComponent,
        ChapterGroupItemComponent,
        ChapterGroupListComponent
    ],
    exports: [
        MangaInfoListComponent,
        ChapterGroupItemComponent,
        ChapterGroupListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class MangaSharedModule {
}
