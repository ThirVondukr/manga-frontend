import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "app-manga-info-list",
    templateUrl: "./manga-info-list.component.html",
    styleUrls: ["./manga-info-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaInfoListComponent {
}
