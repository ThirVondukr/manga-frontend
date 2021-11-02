import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {RecentChaptersFeedPageComponent} from "src/app/manga-chapters-feed/components/recent-chapters-feed-page/recent-chapters-feed-page.component";
import {UserChaptersFeedPageComponent} from "src/app/manga-chapters-feed/components/user-chapters-feed-page/user-chapters-feed-page.component";


const routes: Route[] = [
    {path: "", component: RecentChaptersFeedPageComponent},
    {path: "user/:username", component: UserChaptersFeedPageComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecentChaptersFeedRoutingModule {
}
