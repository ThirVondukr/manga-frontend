import {Directive, ElementRef, EventEmitter, HostListener, Output} from "@angular/core";


@Directive({
    selector: "[appClickOutside]"
})
export class ClickOutsideDirective {

    @Output() clickOutside = new EventEmitter<Event>();

    constructor(private _element: ElementRef) {
    }

    @HostListener("document:click", ["$event.target"])
    private click(target: HTMLElement) {
        if (!this._element.nativeElement.contains(target)) {
            this.clickOutside.emit();
        }
    }
}
