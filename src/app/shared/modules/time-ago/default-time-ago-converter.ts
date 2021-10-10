import {ITimeAgoArgs, ITimeAgoConverter} from "src/app/shared/modules/time-ago/time-ago.converter.interface";


export class DefaultTimeAgoConverter implements ITimeAgoConverter {
    convert({seconds, minutes, hours, days, years}: ITimeAgoArgs): string {
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
