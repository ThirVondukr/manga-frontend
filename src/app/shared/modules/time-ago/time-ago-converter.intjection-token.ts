import {InjectionToken} from "@angular/core";
import {ITimeAgoConverter} from "src/app/shared/modules/time-ago/time-ago.converter.interface";


export const TIME_AGO_CONVERTER = new InjectionToken<ITimeAgoConverter>("TimeAgoConverter");
