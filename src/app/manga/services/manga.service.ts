import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {MangaHomeQuery} from "src/gql/queries/manga-home";
import {MangaHome} from "src/gql/generated/MangaHome";
import {GetMangaPage, GetMangaPageVariables} from "src/gql/generated/GetMangaPage";
import {GetMangaChapters, GetMangaChaptersVariables} from "src/gql/generated/GetMangaChapters";
import {Router} from "@angular/router";
import {GET_MANGA_PAGE_QUERY} from "src/gql/queries/manga";
import {GET_MANGA_CHAPTERS_QUERY} from "src/gql/queries/manga-chapters";


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
