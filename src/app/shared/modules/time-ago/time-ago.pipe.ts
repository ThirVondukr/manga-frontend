import {Inject, Pipe, PipeTransform} from "@angular/core";
import {ITimeAgoConverter} from "src/app/shared/modules/time-ago/time-ago.converter.interface";
import {TIME_AGO_CONVERTER} from "src/app/shared/modules/time-ago/time-ago-converter.intjection-token";


@Pipe({
    name: "timeAgo"
})
export class TimeAgoPipe implements PipeTransform {
    public constructor(
        @Inject(TIME_AGO_CONVERTER)
        private readonly _converter: ITimeAgoConverter
    ) {
    }

    transform(value: Date | string): string {
        if (typeof value === "string") {
            value = new Date(value);
        }

        const now = Date.now();
        const seconds = Math.round((now - value.getTime()) / 1000);
        const minutes = Math.round(seconds / 60);
        const hours = Math.round(seconds / 60 / 60);
        const days = Math.round(seconds / 60 / 60 / 24)
        const years = Math.round(seconds / 60 / 60 / 24 / 365);

        return this._converter.convert({
            seconds,
            minutes,
            hours,
            days,
            years,
        });
    }
}
