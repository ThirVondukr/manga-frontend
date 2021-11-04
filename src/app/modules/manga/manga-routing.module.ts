import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {
    MangaHomePageComponent,
    RecentChaptersFeedPageComponent,
    UserChaptersFeedPageComponent,
    MangaPageComponent
} from "./components";


const routes: Route[] = [
    {
        path: "",
        component: MangaHomePageComponent
    },
    {
        path: "feed",
        component: RecentChaptersFeedPageComponent
    },
    {
        path: "feed/user/:username",
        component: UserChaptersFeedPageComponent
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
