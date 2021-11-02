import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
    selector: "app-reader",
    templateUrl: "./reader.component.html",
    styleUrls: ["./reader.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReaderComponent implements OnInit {

    public images = [
        'http://localhost:8000/static/manga/made-in-abyss/1/1/1.jpg',
        'http://localhost:8000/static/manga/made-in-abyss/1/1/2.jpg',
        'http://localhost:8000/static/manga/made-in-abyss/1/1/3.jpg',
        'http://localhost:8000/static/manga/made-in-abyss/1/1/4.jpg',
        'http://localhost:8000/static/manga/made-in-abyss/1/1/5.jpg',
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
