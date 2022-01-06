import {Injectable} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
    providedIn: "root"
})
export class IconRegistryService {

    constructor(
        private readonly iconRegistry: MatIconRegistry,
        private readonly sanitizer: DomSanitizer
    ) {
    }

    public init(): void {
        this.registerIcon("menu");
        this.registerIcon("account");
        this.registerIcon("close");
        this.registerIcon("star");
        this.registerIcon("star_outline");
    }

    public registerIcon(name: string, fileName: string = `${name}.svg`): void {
        const iconUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${fileName}`);
        this.iconRegistry.addSvgIcon(name, iconUrl);
    }
}
