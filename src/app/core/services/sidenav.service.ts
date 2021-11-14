import {Injectable} from "@angular/core";
import {BehaviorSubject, of} from "rxjs";

interface MenuLink {
    icon?: string;
    text: string;
    path: string;
}

@Injectable({
    providedIn: "root"
})
export class SidenavService {

    private readonly _menuLinks: ReadonlyArray<MenuLink> = [
        {
            text: "Home",
            path: "/"
        },
        {
            text: "Recent chapters",
            path: "/recent-chapters"
        }
    ];

    public readonly menuLinks$ = of(this._menuLinks);

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
