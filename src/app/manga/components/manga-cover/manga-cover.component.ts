import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {MangaRoutingService} from "src/app/manga/services/manga-routing.service";
import {ImageService} from "src/app/shared/services/image.service";
import {MangaPartial} from "src/app/manga/components/manga-cover/manga-partial.interface";


@Component({
    selector: "app-manga-cover",
    templateUrl: "manga-cover.component.html",
    styleUrls: ["./manga-cover.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaCoverComponent implements OnInit {

    @Input() manga!: MangaPartial;
    public src!: string;

    constructor(
        public readonly mangaRouting: MangaRoutingService,
        public readonly imageService: ImageService,
    ) {
    }

    ngOnInit() {
        const src = this.manga.cover?.imageUrl;
        this.src = src ? src : "";
    }
}
