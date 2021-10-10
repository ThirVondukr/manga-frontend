import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {
    GetRecentChapters_recentChapters_edges_node,
    GetRecentChapters_recentChapters_edges_node_manga
} from "src/app/graphql/__generated__/GetRecentChapters";
import {MangaRoutingService} from "src/app/manga/services/manga-routing.service";


@Component({
    selector: "app-chapter-group-item",
    templateUrl: "./chapter-group-item.component.html",
    styleUrls: ["./chapter-group-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterGroupItem implements OnInit {
    @Input()
    chapterGroup!: GetRecentChapters_recentChapters_edges_node[];
    manga!: GetRecentChapters_recentChapters_edges_node_manga;

    constructor(
        public readonly mangaRoutingService: MangaRoutingService,
    ) {

    }

    ngOnInit() {
        this.manga = this.chapterGroup[0].manga;
    }
}
