import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MangaStarService} from "src/app/manga/services/manga-star.service";
import {Subject} from "rxjs";
import {switchMap, takeUntil} from "rxjs/operators";


@Component({
    selector: "app-manga-star[liked][mangaId]",
    templateUrl: "./manga-star.component.html",
    styleUrls: ["./manga-star.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaStarComponent implements OnInit, OnDestroy {
    @Input()
    liked = false;

    @Input()
    mangaId!: string;

    private readonly _click$ = new Subject();
    private readonly _unsub$ = new Subject();

    constructor(
        private readonly _mangaStarService: MangaStarService
    ) {
    }

    public ngOnInit() {
        this._click$.pipe(
            switchMap(() => this._mangaStarService.likeManga({
                mangaId: this.mangaId,
                liked: !this.liked,
            })),
            takeUntil(this._unsub$),
        ).subscribe()
    }

    public ngOnDestroy() {
        this._unsub$.next();
        this._unsub$.complete();
    }

    public onClick() {
        this._click$.next();
    }
}
