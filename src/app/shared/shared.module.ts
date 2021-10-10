import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {InputComponent} from "src/app/shared/components/input/input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputWrapperComponent} from "src/app/shared/components/input-wrapper/input-wrapper.component";
import {ButtonComponent} from "src/app/shared/components/button/button.component";
import {RouterModule} from "@angular/router";
import {AppTooltipComponent} from "src/app/shared/components/tooltip/app-tooltip.component";
import {UserDropdownComponent} from "src/app/shared/components/user-dropdown/user-dropdown.component";
import {ClickOutsideDirective} from "src/app/shared/directives/click-outside.directive";
import {PaginationNavComponent} from "src/app/shared/components/pagination-nav/pagination-nav.component";
import {BreakpointObserverModule} from "src/app/shared/modules/breakpoint/breakpoint-observer.module";
import {CdnImageComponent} from "src/app/shared/components/cdn-image/cdn-image.component";
import {IconComponent} from "src/app/shared/components/icon/icon.component";
import {UserAvatarComponent} from "src/app/shared/components/user-avatar/user-avatar.component";


@NgModule({
    declarations: [
        ButtonComponent,
        AppTooltipComponent,
        InputComponent,
        InputWrapperComponent,
        UserDropdownComponent,
        ClickOutsideDirective,
        PaginationNavComponent,
        CdnImageComponent,
        IconComponent,
        UserAvatarComponent,
    ],
    exports: [
        InputComponent,
        InputWrapperComponent,
        ButtonComponent,
        PaginationNavComponent,
        CdnImageComponent,
        ClickOutsideDirective,
        IconComponent,
        UserAvatarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BreakpointObserverModule,
        RouterModule,
    ],
})
export class SharedModule {
}
