import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "src/app/auth/services/auth.service";
import {tap} from "rxjs/operators";
import {AuthRoutingService} from "src/app/auth/services/auth-routing.service";


@Injectable({
    providedIn: "root"
})
export class AuthenticatedGuard implements CanActivate {
    constructor(
        private readonly _authService: AuthService,
        private readonly _authRouting: AuthRoutingService,
    ) {
    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this._authService.isLoggedIn$
            .pipe(
                tap(async (loggedIn) => {
                    if (!loggedIn) {
                        await this._authRouting.signIn();
                    }
                })
            );
    }
}
