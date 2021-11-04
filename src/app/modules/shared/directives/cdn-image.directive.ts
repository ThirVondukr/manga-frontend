import {Directive, HostBinding, Input} from "@angular/core";
import {ImageService} from "src/app/modules/shared/services";


@Directive({
    selector: "img[appCdnImage][src]"
})
export class CdnImageDirective {

    @Input()
    public src: string | undefined = "";

    @HostBinding("src")
    public get imageUrl(): string {
        return this._imageService.getImageUrl(this.src || "");
    }

    constructor(
        private readonly _imageService: ImageService,
    ) {
    }
}
