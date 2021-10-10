import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {CoerceBoolean} from "src/app/shared/lib/coerce-boolean";


@Component({
    selector: "app-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    @Input()
    @CoerceBoolean()
    hoverable: string | boolean = false;

    @Input()
    @CoerceBoolean()
    outlined = false;
}
