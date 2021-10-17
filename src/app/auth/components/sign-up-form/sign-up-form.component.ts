import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "src/app/auth/services/auth.service";
import {Subject} from "rxjs";
import {switchMap, takeUntil, tap} from "rxjs/operators";
import {UserRoutingService} from "src/app/users/services/user-routing.service";
import {Router} from "@angular/router";


@Component({
    selector: "app-registration-form",
    templateUrl: "./sign-up-form.component.html",
    styleUrls: ["./sign-up-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent implements OnDestroy {
    public readonly form: FormGroup;
    private readonly _unsub$ = new Subject();

    constructor(
        private readonly _fb: FormBuilder,
        private readonly _authService: AuthService,
        private readonly _usersRouter: UserRoutingService,
        private readonly _router: Router,
    ) {
        this.form = _fb.group({
            username: [""],
            email: [""],
            password: [""],
            passwordConfirm: [""],
        });
    }

    public submit(): void {
        const form = this.form.value;
        this._authService.createAccount({
            username: form.username,
            email: form.email,
            password: form.password,
        }).pipe(
            switchMap(_ => this._authService.authenticate({
                username: form.username,
                password: form.password,
            })),
            tap(async user  => await this._router.navigate(this._usersRouter.userProfile(user))),
            takeUntil(this._unsub$),
        ).subscribe();
    }

    public ngOnDestroy() {
        this._unsub$.next();
        this._unsub$.complete();
    }
}
