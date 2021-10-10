import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "form[app-base-auth-form]",
    template: "<ng-content></ng-content>",
    styleUrls: ["./base-auth-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseAuthFormComponent {

}
