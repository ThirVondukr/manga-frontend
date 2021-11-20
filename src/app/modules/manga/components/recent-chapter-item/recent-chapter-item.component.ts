import {ChangeDetectionStrategy, Component, Input} from "@angular/core";


interface Chapter {
    id: any;
    title: string;
    volume: number;
    number: number;
    numberExtra: number;
    publishedAt: string;
}

interface Manga {
    id: any;
    title: string;
}

interface TranslatorsGroup {
    title: string;
}

@Component({
    selector: "app-recent-chapter-item",
    templateUrl: "./recent-chapter-item.component.html",
    styleUrls: ["./recent-chapter-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentChapterItemComponent {
    @Input()
    chapter!: Chapter;

    @Input()
    manga!: Manga;

    @Input()
    translatorsGroup!: TranslatorsGroup;

    @Input()
    imageUrl!: string;
}
