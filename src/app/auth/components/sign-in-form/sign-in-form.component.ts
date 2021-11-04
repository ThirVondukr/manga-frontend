import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {AuthService} from "src/app/auth/services/auth.service";
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserRoutingService} from "src/app/modules/users/services/user-routing.service";
import {Router} from "@angular/router";
import {AuthRoutingService} from "src/app/auth/services/auth-routing.service";


@Component({
    selector: "app-login-form",
    templateUrl: "./sign-in-form.component.html",
    styleUrls: ["./sign-in-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnDestroy {
    public readonly form: FormGroup;
    private readonly unsubscribe = new ReplaySubject();

    constructor(
        private readonly _authService: AuthService,
        private readonly _userRouting: UserRoutingService,
        private readonly _fb: FormBuilder,
        private readonly _router: Router,
        public readonly authRouting: AuthRoutingService,
    ) {
        this.form = _fb.group({
            username: [""],
            password: [""],
        });
    }


    public submit() {
        this._authService.authenticate(this.form.value).pipe(
            takeUntil(this.unsubscribe)
        ).subscribe(async user => {
            await this._router.navigate(this._userRouting.userProfile(user))
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
