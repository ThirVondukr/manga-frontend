import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {MangaHome_popularManga} from "src/app/graphql/__generated__/MangaHome";


@Component({
    selector: "app-popular-manga-item[manga]",
    templateUrl: "./popular-manga-item.component.html",
    styleUrls: ["./popular-manga-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularMangaItemComponent {
    @Input() manga!: MangaHome_popularManga;
}
