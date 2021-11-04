import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "src/app/modules/auth/services/auth.service";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private readonly _authService: AuthService,
    ) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const jwt = this._authService.jwtToken;
        if (jwt !== null) {
            request = request.clone({
                setHeaders: {Authorization: `Bearer ${jwt}`}
            });
        }
        return next.handle(request);

    }
}
