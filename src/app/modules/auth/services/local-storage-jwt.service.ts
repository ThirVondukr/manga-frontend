import {Injectable} from "@angular/core";
import {JWTToken} from "src/app/modules/auth/models/Jwt";


@Injectable({
    providedIn: "root"
})
export class LocalStorageJWTService {
    public get token(): string | null {
        const token = sessionStorage.getItem("accessToken");
        if (token !== null) {
            const jwt = JWTToken.fromString(token);
            if (jwt.isExpired) {
                sessionStorage.removeItem("accessToken");
                return null;
            }
        }
        return token;
    }

    public set token(token: string | null) {
        if (token === null) {
            sessionStorage.removeItem("accessToken");
        } else {
            sessionStorage.setItem("accessToken", token);
        }
    }
}
