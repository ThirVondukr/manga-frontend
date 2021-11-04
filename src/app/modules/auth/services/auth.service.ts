import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "src/app/modules/users/models/user.interface";
import {map, mergeMap, tap} from "rxjs/operators";
import {UserLogin} from "src/app/modules/auth/models/UserLogin";
import {TokenResponse} from "src/app/modules/auth/models/TokenResponse";
import {HttpClient} from "@angular/common/http";
import {Apollo} from "apollo-angular";
import {LocalStorageJWTService} from "src/app/modules/auth/services/local-storage-jwt.service";
import {UserCreate} from "src/app/modules/auth/models/UserCreate";
import {UserRoutingService} from "src/app/routing";


@Injectable({
    providedIn: "root"
})
export class AuthService {
    public readonly isLoggedIn$: Observable<boolean>;
    public readonly user$: Observable<User | null>;
    private readonly _jwtToken$: BehaviorSubject<string | null>;
    private readonly _user$: BehaviorSubject<User | null>;

    public get jwtToken(): string | null {
        return this._jwtToken$.value;
    }

    constructor(
        private readonly _httpClient: HttpClient,
        private readonly _tokenStorage: LocalStorageJWTService,
        private readonly _userRouter: UserRoutingService,
        private readonly _apollo: Apollo,
    ) {
        this._jwtToken$ = new BehaviorSubject<string | null>(null);
        this._user$ = new BehaviorSubject<User | null>(null);

        this.user$ = this._user$.asObservable();
        this.isLoggedIn$ = this.user$.pipe(
            map(user => user !== null),
        );
    }

    public init() {
        const token = this._tokenStorage.token;
        if (token) {
            this._jwtToken$.next(token);
            this.getCurrentUser().subscribe();
        }
    }

    public async logout() {
        this._user$.next(null);
        this._jwtToken$.next(null);
        this._tokenStorage.token = null;
        await this._apollo.client.resetStore();
    }

    public authenticate(user: UserLogin): Observable<User> {
        const formData = new FormData();
        formData.append("username", user.username);
        formData.append("password", user.password);
        formData.append("grant_type", "password");

        return this._httpClient
            .post<TokenResponse>(`api/auth/token/`, formData)
            .pipe(
                tap(async response => {
                    this._jwtToken$.next(response.accessToken);
                    this._tokenStorage.token = response.accessToken;
                    await this._apollo.client.resetStore();
                }),
                mergeMap(() => this.getCurrentUser())
            )
    }

    public createAccount(user: UserCreate) {
        return this._httpClient.post<User>("api/users/", user);
    }


    private getCurrentUser(): Observable<User> {
        return this._httpClient.get<User>(`api/users/me/`)
            .pipe(tap(user => this._user$.next(user)));
    }
}
