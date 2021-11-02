import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReaderComponent} from "./components";


const routes: Routes = [
    {path: ":titleSlug/chapter/:chapterId", component: ReaderComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MangaReaderRoutingModule {
}
