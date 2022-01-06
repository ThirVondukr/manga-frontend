import {Component, OnInit} from "@angular/core";
import {AuthService} from "src/app/modules/auth/services";
import {IconRegistryService, SidenavService} from "src/app/core/services";


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    constructor(
        private readonly _authService: AuthService,
        private readonly _iconService: IconRegistryService,
        public readonly sidenavService: SidenavService,
    ) {
    }

    public ngOnInit(): void {
        this._authService.init();
        this._iconService.init();
    }

}
