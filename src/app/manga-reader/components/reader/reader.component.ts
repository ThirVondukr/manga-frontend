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
            chapterId: "aaa85e4d-89a4-4ce5-8abe-5118a4f58a82"
        }).pipe(
            map(r => r.getChapterById.pages.map(c => c.imageUrl))
        );
    }

}
