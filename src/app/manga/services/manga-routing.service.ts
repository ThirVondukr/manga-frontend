import {Injectable} from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class MangaRoutingService {
    public readonly HOME = ["/manga", "home"];
    public readonly FEED = ["/manga", "feed"];

    public mangaDetailsPage(titleSlug: string): any[] {
        return ["/manga", "title", titleSlug];
    }
}
