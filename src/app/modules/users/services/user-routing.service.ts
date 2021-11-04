import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

import {User} from "../models";


@Injectable({
    providedIn: "root"
})
export class UserRoutingService {

    constructor(
        private readonly _router: Router
    ) {
    }

    public userProfile(user: User): any[] {
        return ["/users", user.username, "profile"];
    }
}
