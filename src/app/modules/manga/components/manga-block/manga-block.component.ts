import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "app-manga-block",
    templateUrl: "./manga-block.component.html",
    styleUrls: ["./manga-block.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaBlockComponent {
}
