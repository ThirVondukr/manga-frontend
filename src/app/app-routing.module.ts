import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {NotFoundPageComponent} from "src/app/components";


const routes: Route[] = [
    {
        path: "",
        loadChildren: () => import("src/app/modules/manga/manga.module").then(m => m.MangaModule)
    },
    {
        path: "reader",
        loadChildren: () => import("src/app/modules/manga-reader/manga-reader.module").then(m => m.MangaReaderModule)
    },
    {
        path: "auth",
        loadChildren: () => import("src/app/modules/auth/auth.module").then(m => m.AuthModule)
    },
    {
        path: "users",
        loadChildren: () => import("src/app/modules/users/users.module").then(m => m.UsersModule)
    },
    {
        path: "not-found",
        component: NotFoundPageComponent
    },
    {
        path: "**",
        redirectTo: "not-found"
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
