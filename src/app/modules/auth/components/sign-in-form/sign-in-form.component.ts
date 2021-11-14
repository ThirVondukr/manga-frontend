import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {AuthService} from "src/app/modules/auth/services/auth.service";
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthRoutingService, UserRoutingService} from "src/app/routing";


@Component({
    selector: "app-login-form",
    templateUrl: "./sign-in-form.component.html",
    styleUrls: ["./sign-in-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnDestroy {

    private readonly unsubscribe = new ReplaySubject();

    public readonly form: FormGroup;

    constructor(
        private readonly _authService: AuthService,
        private readonly _userRouting: UserRoutingService,
        private readonly _fb: FormBuilder,
        private readonly _router: Router,
        public readonly authRouting: AuthRoutingService,
    ) {
        this.form = _fb.group({
            username: ["", [Validators.required]],
            password: ["", [Validators.required]],
        });
    }

    public onSubmit() {
        this._authService.authenticate(this.form.value).pipe(
            takeUntil(this.unsubscribe)
        ).subscribe(async user => {
            await this._router.navigate(this._userRouting.userProfile(user.username));
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
