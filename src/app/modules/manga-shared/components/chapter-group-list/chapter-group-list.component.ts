import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

import {GetRecentChapters_recentChapters_edges_node} from "src/gql/generated/GetRecentChapters";


@Component({
    selector: "app-chapter-group-list[chapterGroups]",
    templateUrl: "./chapter-group-list.component.html",
    styleUrls: ["./chapter-group-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterGroupListComponent {

    @Input()
    public chapterGroups!: GetRecentChapters_recentChapters_edges_node[][];

}
