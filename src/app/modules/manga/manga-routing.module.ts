import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {
    MangaHomePageComponent,
    RecentChaptersPageComponent,
    MangaPageComponent
} from "./components";


const routes: Route[] = [
    {
        path: "",
        component: MangaHomePageComponent
    },
    {
        path: "recent-chapters",
        component: RecentChaptersPageComponent
    },
    {
        path: ":titleSlug",
        component: MangaPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MangaRoutingModule {
}
