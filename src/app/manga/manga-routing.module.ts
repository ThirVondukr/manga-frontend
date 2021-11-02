import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";


const routes: Route[] = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {
        path: "home",
        loadChildren: () => import("src/app/manga-home/manga-home.module")
            .then(m => m.MangaHomeModule)
    },
    {
        path: "feed",
        loadChildren: () => import("src/app/manga-chapters-feed/recent-chapters-feed.module")
            .then(m => m.RecentChaptersFeedModule)
    },
    {
        path: "",
        loadChildren: () => import("src/app/manga-details-page/manga-page.module")
            .then(m => m.MangaPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MangaRoutingModule {
}
