import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "app-input-wrapper",
    templateUrl: "./input-wrapper.component.html",
    styleUrls: ["./input-wrapper.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWrapperComponent {
}
