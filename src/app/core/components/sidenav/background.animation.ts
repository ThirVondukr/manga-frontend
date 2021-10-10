import {animate, state, style, transition, trigger} from "@angular/animations";


export const backgroundFadeAnimation = trigger("backgroundFade", [
    state("shown", style({
        opacity: "*",
    })),
    state("hidden", style({
        opacity: 0,
        display: "none",
    })),

    transition("shown <=> hidden", [
        style({display: "block"}),
        animate("250ms"),
    ]),
]);
