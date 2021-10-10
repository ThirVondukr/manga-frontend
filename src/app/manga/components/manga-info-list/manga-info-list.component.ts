import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "app-manga-info-list",
    template: "<ng-content></ng-content>",
    styleUrls: ["./manga-info-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaInfoListComponent {
}
