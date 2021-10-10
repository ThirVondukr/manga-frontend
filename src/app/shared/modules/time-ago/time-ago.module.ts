import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TimeAgoPipe} from "src/app/shared/modules/time-ago/time-ago.pipe";
import {DefaultTimeAgoConverter} from "src/app/shared/modules/time-ago/default-time-ago-converter";
import {TIME_AGO_CONVERTER} from "src/app/shared/modules/time-ago/time-ago-converter.intjection-token";


@NgModule({
    providers: [
        {
            provide: TIME_AGO_CONVERTER,
            useClass: DefaultTimeAgoConverter,
        },
    ],
    declarations: [
        TimeAgoPipe
    ],
    exports: [
        TimeAgoPipe
    ],
    imports: [
        CommonModule
    ]
})
export class TimeAgoModule {
}
