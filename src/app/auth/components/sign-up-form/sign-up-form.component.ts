import {ChangeDetectionStrategy, Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
    selector: "app-registration-form",
    templateUrl: "./sign-up-form.component.html",
    styleUrls: ["./sign-up-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent {
    public readonly form: FormGroup;

    constructor(
        private readonly _fb: FormBuilder,
    ) {
        this.form = _fb.group({
            username: [""],
            password: [""],
            passwordConfirm: [""],
        });
    }

    public submit(): void {
    }
}
