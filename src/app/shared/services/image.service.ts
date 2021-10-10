import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";


@Injectable({
    providedIn: "root"
})
export class ImageService {
    public getImageUrl(imageUrl: string): string {
        return `${environment.cdnUrl}/${imageUrl}`;
    }
}
