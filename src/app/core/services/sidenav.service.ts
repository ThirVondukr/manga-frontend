import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable({
    providedIn: "root"
})
export class SidenavService {
    private readonly _isOpen$ = new BehaviorSubject(false);
    public readonly isOpen$ = this._isOpen$.asObservable();

    public open() {
        this._isOpen$.next(true);
    }

    public close() {
        this._isOpen$.next(false);
    }

    public toggle() {
        this._isOpen$.next(!this._isOpen$.value);
    }
}
