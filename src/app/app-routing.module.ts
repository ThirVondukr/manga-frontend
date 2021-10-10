import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";


const routes: Route[] = [
    {
        path: "",
        redirectTo: "manga",
        pathMatch: "full"
    },
    {
        path: "manga",
        loadChildren: () => import("src/app/manga/manga.module").then(m => m.MangaModule)
    },
    {
        path: "auth",
        loadChildren: () => import("src/app/auth/auth.module").then(m => m.AuthModule)
    },
    {
        path: "users",
        loadChildren: () => import("src/app/users/users.module").then(m => m.UsersModule)
    },
    {
        path: "not-found",
        loadChildren: () => import("src/app/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule)
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
