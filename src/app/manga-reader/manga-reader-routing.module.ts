import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MangaReaderComponent} from "src/app/manga-reader/manga-reader/manga-reader.component";



const routes: Routes = [
    {path: ":titleSlug/chapter/:chapterId", component: MangaReaderComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MangaReaderRoutingModule {
}
