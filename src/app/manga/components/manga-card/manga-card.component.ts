import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "app-manga-card",
    templateUrl: "./manga-card.component.html",
    styleUrls: ["./manga-card.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaCardComponent {
}
