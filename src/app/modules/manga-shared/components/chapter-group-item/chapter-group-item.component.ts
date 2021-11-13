import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";

import {
    GetRecentChapters_recentChapters_edges_node,
    GetRecentChapters_recentChapters_edges_node_manga
} from "src/gql/generated/GetRecentChapters";
import {MangaRoutingService} from "src/app/routing";


@Component({
    selector: "app-chapter-group-item",
    templateUrl: "./chapter-group-item.component.html",
    styleUrls: ["./chapter-group-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterGroupItemComponent implements OnInit {

    public manga!: GetRecentChapters_recentChapters_edges_node_manga;

    @Input()
    public chapterGroup!: GetRecentChapters_recentChapters_edges_node[];

    constructor(
        public readonly mangaRoutingService: MangaRoutingService,
    ) {
    }

    public ngOnInit() {
        this.manga = this.chapterGroup[0].manga;
    }
}
