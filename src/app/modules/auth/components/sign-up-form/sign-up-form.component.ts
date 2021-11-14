import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {Subject} from "rxjs";
import {switchMap, takeUntil, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthRoutingService, UserRoutingService} from "src/app/routing";


@Component({
    selector: "app-registration-form",
    templateUrl: "./sign-up-form.component.html",
    styleUrls: ["./sign-up-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent implements OnDestroy {

    private readonly _unsub$ = new Subject();

    public readonly form: FormGroup;

    constructor(
        private readonly _fb: FormBuilder,
        private readonly _router: Router,
        private readonly _authService: AuthService,
        private readonly _usersRouter: UserRoutingService,
        public readonly authRouting: AuthRoutingService
    ) {
        this.form = _fb.group({
            username: ["", [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(24)]
            ],
            email: ["", [
                Validators.required,
                Validators.email]
            ],
            password: ["", [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(48)]
            ],
            passwordConfirm: ["", [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(48)]
            ],
        });
    }

    public onSubmit(): void {
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
            tap(async user => await this._router.navigate(this._usersRouter.userProfile(user.username))),
            takeUntil(this._unsub$),
        ).subscribe();
    }

    public ngOnDestroy() {
        this._unsub$.next();
        this._unsub$.complete();
    }
}
