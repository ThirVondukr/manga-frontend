import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";


@Component({
    selector: "app-manga-reader",
    templateUrl: "./manga-reader.component.html",
    styleUrls: ["./manga-reader.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MangaReaderComponent implements OnInit {
    public readonly chapter: Observable<number>;

    constructor(
        private readonly _route: ActivatedRoute,
    ) {
        this.chapter = this._route.params.pipe(
            switchMap(({chapterId}) => of(4)),
        )
    }

    ngOnInit(): void {
    }

}
