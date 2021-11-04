import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MangaInfoListComponent} from "./components";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        MangaInfoListComponent
    ],
    exports: [
        MangaInfoListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class MangaSharedModule {
}
