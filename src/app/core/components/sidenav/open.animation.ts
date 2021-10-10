import {animate, state, style, transition, trigger} from "@angular/animations";


export const openAnimation = trigger("open", [
    state("true", style({
        width: "*",
        "padding-right": "*",
        "padding-left": "*"
    })),
    state("false", style({
        width: 0,
        "padding-right": 0,
        "padding-left": 0,
    })),
    transition("true <=> false", [
        animate("250ms ease-in-out"),
    ])
]);
