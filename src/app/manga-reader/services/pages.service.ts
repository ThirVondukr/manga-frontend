import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {ReaderChapter, ReaderChapterVariables} from "src/gql/generated/ReaderChapter";
import {ReaderChapterQuery} from "src/gql/queries/reader-chapter";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class PagesService {

    constructor(
        private readonly _apollo: Apollo,
    ) {
    }

    public getChapter(variables: ReaderChapterVariables): Observable<ReaderChapter> {
        return this._apollo.watchQuery<ReaderChapter>({
            query: ReaderChapterQuery,
            variables
        }).valueChanges.pipe(
            map(r => r.data)
        );
    }
}
