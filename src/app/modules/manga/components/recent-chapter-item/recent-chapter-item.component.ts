import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

import {MangaHome_recentChapters_edges_node} from "src/gql/generated/MangaHome";
import {MangaRoutingService} from "src/app/routing";


@Component({
    selector: "app-recent-chapter-item[chapter]",
    templateUrl: "./recent-chapter-item.component.html",
    styleUrls: ["./recent-chapter-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentChapterItemComponent {

    @Input()
    public chapter!: MangaHome_recentChapters_edges_node;

    constructor(
        public readonly mangaRouting: MangaRoutingService,
    ) {
    }
}
