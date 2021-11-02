import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MangaPageComponent} from "src/app/manga/manga-details-page/components/manga-page/manga-page.component";


const routes: Routes = [
    {
        path: ":titleSlug",
        component: MangaPageComponent,
        pathMatch: "full",
        loadChildren: () => import("src/app/manga/manga-reader/manga-reader-routing.module")
            .then(m => m.MangaReaderRoutingModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MangaPageRoutingModule {
}
