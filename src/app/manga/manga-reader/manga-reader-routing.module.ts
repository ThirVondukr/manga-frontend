import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MangaReaderComponent} from "src/app/manga/manga-reader/manga-reader/manga-reader.component";

const routes: Routes = [
    {path: ":chapterId", component: MangaReaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaReaderRoutingModule { }
