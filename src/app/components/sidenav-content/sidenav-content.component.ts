import {Component, ChangeDetectionStrategy} from "@angular/core";
import {SidenavService} from "src/app/core/services";

@Component({
    selector: "app-sidenav-content",
    templateUrl: "./sidenav-content.component.html",
    styleUrls: ["./sidenav-content.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContentComponent {

    constructor(public sidenavService: SidenavService) {
    }

}
