import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    selector: "input[app-input]",
    template: "<ng-content></ng-content>",
    styleUrls: ["./input.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
}
