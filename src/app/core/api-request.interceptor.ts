import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";


@Injectable()
export class ApiRequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.url.startsWith("api/")) {
            const url = `${environment.backendUrl}/${request.url.replace("api/", "")}`;
            request = request.clone({url})
        }
        return next.handle(request);
    }
}
