import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PagesService} from "src/app/manga-reader/services/pages.service";


@Component({
    selector: "app-reader",
    templateUrl: "./reader.component.html",
    styleUrls: ["./reader.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReaderComponent {

    public images$: Observable<string[]>;

    constructor(
        private readonly _pagesService: PagesService
    ) {
        this.images$ = this._pagesService.getChapter({
            chapterId: "f9e1fd93-77bb-4c6c-9608-4d439b3cb132"
        }).pipe(
            map(r => r.getChapterById.pages.map(c => c.imageUrl))
        );
    }

}
