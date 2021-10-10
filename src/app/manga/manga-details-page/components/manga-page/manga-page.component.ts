import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {filter, map, shareReplay, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {GetMangaPage_getMangaByTitleSlug,} from "src/app/manga/manga-details-page/graphql/__generated__/GetMangaPage";
import {MangaService} from "src/app/manga/services/manga.service";


@Component({
    templateUrl: "./manga-page.component.html",
    styleUrls: ["./manga-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaPageComponent {
    public readonly manga$: Observable<GetMangaPage_getMangaByTitleSlug>;
    public readonly writersList$: Observable<string>;
    public readonly artistsList$: Observable<string>;
    public readonly description$: Observable<string | null>;

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _mangaService: MangaService,
    ) {
        this.manga$ = this._route.params.pipe(
            map(({titleSlug}) => titleSlug),
            switchMap(titleSlug => this._mangaService.getManga({titleSlug})),
            map(res => res.data.getMangaByTitleSlug),
            filter((manga): manga is GetMangaPage_getMangaByTitleSlug => manga !== null),
            shareReplay(),
        );
        this.writersList$ = this.manga$.pipe(
            map(manga => manga.writers.map(a => a.name).join(", "))
        )
        this.artistsList$ = this.manga$.pipe(
            map(manga => manga.artists.map(a => a.name).join(", "))
        )
        this.description$ = this.manga$.pipe(
            map(manga => {
                if (manga.infos.length === 0) {
                    return null
                }
                return manga.infos[0].description;
            })
        )
    }
}
