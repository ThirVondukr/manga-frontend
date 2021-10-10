import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MangaHomePageComponent} from "src/app/manga/manga-home/views/manga-home-page/manga-home-page.component";


const routes: Routes = [
    {path: "", component: MangaHomePageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MangaHomeRoutingModule {
}
