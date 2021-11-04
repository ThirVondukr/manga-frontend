import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    ButtonComponent,
    IconComponent,
    InputComponent,
    InputWrapperComponent,
    PaginationNavComponent,
    UserAvatarComponent,
} from "./components";
import {CdnImageDirective} from "./directives";
import {TimeAgoPipe} from "src/app/modules/shared/pipes";


@NgModule({
    declarations: [
        ButtonComponent,
        IconComponent,
        InputComponent,
        InputWrapperComponent,
        PaginationNavComponent,
        UserAvatarComponent,
        CdnImageDirective,
        TimeAgoPipe
    ],
    exports: [
        CommonModule,
        ButtonComponent,
        IconComponent,
        InputComponent,
        InputWrapperComponent,
        PaginationNavComponent,
        UserAvatarComponent,
        CdnImageDirective,
        TimeAgoPipe
    ],
    imports: [
        CommonModule,
    ]
})
export class SharedModule {
}
