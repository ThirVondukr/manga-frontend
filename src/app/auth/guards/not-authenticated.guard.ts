import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "src/app/auth/services/auth.service";
import {map} from "rxjs/operators";


@Injectable({
    providedIn: "root"
})
export class NotAuthenticatedGuard implements CanActivate {
    constructor(
        private readonly _authService: AuthService,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this._authService.isLoggedIn$.pipe(map(authenticated => !authenticated))
    }
}
