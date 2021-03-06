import {Injectable} from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class MangaRoutingService {

    public readonly HOME = ["/"];
    public readonly FEED = ["/recent-chapters"];

    public mangaDetailsPage(titleSlug: string): any[] {
        return ["/manga", titleSlug];
    }

    public chapterPage(titleSlug: string, chapterId: string): any[] {
        return ["/reader", titleSlug, "chapter", chapterId];
    }
}
