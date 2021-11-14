import { Component, ChangeDetectionStrategy } from '@angular/core';
import {AuthService} from "src/app/modules/auth/services";
import {AuthRoutingService} from "src/app/routing";
import {SidenavService} from "src/app/core/services";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    constructor(
        public readonly authService: AuthService,
        public readonly authRouting: AuthRoutingService,
        public readonly sidenavService: SidenavService,
    ) {
    }
}
