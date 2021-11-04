import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class UserRoutingService {

    constructor(
        private readonly _router: Router
    ) {
    }

    public userProfile(username: string): any[] {
        return ["/users", username, "profile"];
    }
}
