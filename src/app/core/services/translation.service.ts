import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, shareReplay, switchMap} from "rxjs/operators";


type Translation = { [key: string]: Translation | string };

@Injectable({
    providedIn: "root"
})
export class TranslationService {
    private readonly _language$ = new ReplaySubject<string>(1);
    private readonly _translation$ = new BehaviorSubject<Translation>({});
    public readonly translation$ = this._translation$.pipe(
        shareReplay(1),
    );

    constructor(
        private readonly _http: HttpClient,
    ) {
        this._language$.pipe(
            switchMap(language => this._http.get<Translation>(
                `assets/translations/${language}.json`
            )),
        ).subscribe(
            translation => this._translation$.next(translation),
        );
        this.changeLanguage("en");
    }

    public changeLanguage(language: string): void {
        this._language$.next(language);
    }

    public get(translationKey: string, args: any = {}): Observable<string> {
        const keys = translationKey.split(".");
        return this.translation$.pipe(
            map(translation => {
                let result: Translation | string = translation;
                for (const key of keys) {
                    if (typeof (result) === "string") {
                        throw new Error(`Translation key ${translationKey} not found.`)
                    }
                    result = result[key];
                }
                if (typeof (result) !== "string") {
                    throw new Error(`Translation key ${translationKey} is not a string.`);
                }
                if (args) {
                    result = result.replace(/\${(.*?)}/g, (_, match) => args[match]);
                }
                return result;
            }),
        );
    }
}
