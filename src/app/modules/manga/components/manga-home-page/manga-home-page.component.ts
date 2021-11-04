import {ChangeDetectionStrategy, Component} from "@angular/core";
import {map} from "rxjs/operators";

import {MangaRoutingService, MangaService} from "../../services";


@Component({
    templateUrl: "./manga-home-page.component.html",
    styleUrls: ["./manga-home-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaHomePageComponent {

    public readonly data$ = this._mangaService.homePageData();

    public readonly latestChapters$ = this.data$.pipe(
        map(data => data.recentChapters.edges.map(edge => edge.node))
    );

    public readonly popularManga$ = this.data$.pipe(map(data => data.popularManga));

    constructor(
        private readonly _mangaService: MangaService,
        public readonly mangaRouting: MangaRoutingService,
    ) {
    }
}
