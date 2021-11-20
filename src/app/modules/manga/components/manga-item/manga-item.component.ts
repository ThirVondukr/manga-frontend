import {ChangeDetectionStrategy, Component, Input} from "@angular/core";


interface Manga {
    id: any;
    title: string;
    type: string;
    status: string;
    likesCount: number;
    isLikedByViewer: boolean;
}

@Component({
    selector: "app-manga-item",
    templateUrl: "./manga-item.component.html",
    styleUrls: ["./manga-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MangaItemComponent {
    @Input()
    manga!: Manga;

    @Input()
    coverUrl!: string;
}
