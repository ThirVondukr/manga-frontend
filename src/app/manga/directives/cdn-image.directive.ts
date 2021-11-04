import {Directive, HostBinding, Input} from "@angular/core";
import {ImageService} from "src/app/shared/services/image.service";


@Directive({
    selector: "img[appCdnImage][src]"
})
export class CdnImageDirective {
    @Input() src: string | undefined = "";

    @HostBinding("src")
    public get imageUrl(): string {
        return this._imageService.getImageUrl(this.src || "");
    }

    constructor(
        private readonly _imageService: ImageService,
    ) {
    }
}
