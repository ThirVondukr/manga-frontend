import {ChangeDetectionStrategy, Component, HostBinding, Input} from "@angular/core";
import {ImageService} from "src/app/shared/services/image.service";


@Component({
    selector: "img[app-cdn-image][src]",
    template: "<ng-content></ng-content>",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdnImageComponent {
    @Input()
    src!: string | undefined;

    @HostBinding("src")
    public get imageUrl(): string {
        if (this.src === undefined) {
            return "";
        }
        return this._imageService.getImageUrl(this.src);
    }

    constructor(
        private readonly _imageService: ImageService,
    ) {
    }
}
