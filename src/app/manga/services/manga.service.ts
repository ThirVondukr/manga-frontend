import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {MangaHomeQuery} from "src/app/graphql/MangaHomeQuery";
import {MangaHome} from "src/app/graphql/__generated__/MangaHome";
import {
    GetMangaPage,
    GetMangaPageVariables
} from "src/app/manga/manga-details-page/graphql/__generated__/GetMangaPage";
import {
    GET_MANGA_CHAPTERS_QUERY,
    GET_MANGA_PAGE_QUERY
} from "src/app/manga/manga-details-page/graphql/queries";
import {
    GetMangaChapters,
    GetMangaChaptersVariables
} from "src/app/manga/manga-details-page/graphql/__generated__/GetMangaChapters";
import {Router} from "@angular/router";


@Injectable({
    providedIn: "root"
})
export class MangaService {
    constructor(
        private readonly _apollo: Apollo,
        private readonly _router: Router,
    ) {
    }

    public homePageData(): Observable<MangaHome> {
        return this._apollo.watchQuery<MangaHome>({
            query: MangaHomeQuery,
        }).valueChanges.pipe(
            map(res => res.data),
        )
    }

    public getManga(variables: GetMangaPageVariables) {
        return this._apollo.watchQuery<GetMangaPage>({
            query: GET_MANGA_PAGE_QUERY,
            variables,
        }).valueChanges.pipe(
            tap(async res => {
                if (res.data.getMangaByTitleSlug === null) {
                    await this._router.navigate(["/not-found"]);
                }
            }),
        );
    }

    public getChapterList(variables: GetMangaChaptersVariables) {
        return this._apollo.watchQuery<GetMangaChapters>({
            query: GET_MANGA_CHAPTERS_QUERY,
            variables,
        }).valueChanges;
    }
}
