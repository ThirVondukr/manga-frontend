import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable({
    providedIn: "root"
})
export class AuthRoutingService {
    public readonly SIGN_IN = ["/auth", "sign-in"];
    public readonly SIGN_UP = ["/auth", "sign-up"];

    constructor(
        private readonly _router: Router,
    ) {
    }

    public async signIn() {
        await this._router.navigate(this.SIGN_IN);
    }

    public async signUp() {
        await this._router.navigate(this.SIGN_UP);
    }
}
