import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {CoerceBoolean} from "src/app/modules/shared/helpers/coerce-boolean";


@Component({
    selector: "button[app-button]",
    host: {
        "[class.outline]": "outline",
    },
    template: "<ng-content></ng-content>",
    styleUrls: ["./button.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input()
    @CoerceBoolean()
    outline: boolean = false;
}
