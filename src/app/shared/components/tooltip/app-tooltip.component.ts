import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
    ViewChild
} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {computePlacement, Placement} from "src/app/shared/components/tooltip/compute-placement";


@Component({
    selector: "[app-tooltip]",
    templateUrl: "./app-tooltip.component.html",
    styleUrls: ["./app-tooltip.component.scss"],
    animations: [
        trigger("open", [
            state("true", style({opacity: 1, display: "*"})),
            state("false", style({opacity: 0, visibility: "hidden"})),
            transition("true <=> false", [
                style({visibility: "visible"}),
                animate("0.1s ease-in-out"),
            ])
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTooltipComponent implements AfterViewInit {
    @Input() placement: Placement = "bottom-center";
    @ViewChild("dropdown") dropdown!: ElementRef;

    public open: boolean = false;

    constructor(private _renderer: Renderer2, private readonly _element: ElementRef) {
    }

    @HostListener("click", ["$event"])
    public onClick(event: Event) {
        event.stopPropagation();
        this.open = !this.open;
    }

    ngAfterViewInit() {
        this._applyStyles();
    }

    public onClickOutside() {
        this.open = false;
    }

    private _applyStyles() {
        const {
            x,
            y
        } = computePlacement(this._element.nativeElement, this.dropdown.nativeElement, this.placement);

        this._renderer.setStyle(
            this.dropdown.nativeElement,
            "transform",
            `translate(${x}px, ${y}px)`
        );
    }
}
