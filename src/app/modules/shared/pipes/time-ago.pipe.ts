import {Pipe, PipeTransform} from "@angular/core";

interface ITimeAgoArgs {
    seconds: number
    minutes: number
    hours: number
    days: number
    years: number
}

@Pipe({
    name: "timeAgo"
})
export class TimeAgoPipe implements PipeTransform {

    public transform(value: Date | string): string {
        if (typeof value === "string") {
            value = new Date(value);
        }

        const now = Date.now();
        const seconds = Math.round((now - value.getTime()) / 1000);
        const minutes = Math.round(seconds / 60);
        const hours = Math.round(seconds / 60 / 60);
        const days = Math.round(seconds / 60 / 60 / 24)
        const years = Math.round(seconds / 60 / 60 / 24 / 365);

        return TimeAgoPipe.convert({
            seconds,
            minutes,
            hours,
            days,
            years,
        });
    }

    private static convert({seconds, minutes, hours, days, years}: ITimeAgoArgs): string {
        if (seconds < 30) {
            return "seconds ago";
        }
        if (seconds < 120) {
            return "minute ago";
        }
        if (minutes < 60) {
            return `${minutes} minutes ago`;
        }
        if (hours == 1) {
            return "1 hour ago";
        }
        if (hours < 24) {
            return `${hours} hours ago`;
        }
        if (days === 1) {
            return "day ago"
        }
        if (days < 30) {
            return `${days} days ago`
        }
        if (years === 0) {
            return `${Math.floor(days / 30)} months ago`
        }
        if (years === 1) {
            return "year ago"
        }
        return `${years} years ago`
    }
}
