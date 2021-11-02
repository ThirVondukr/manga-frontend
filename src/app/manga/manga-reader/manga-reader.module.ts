import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaReaderRoutingModule } from './manga-reader-routing.module';
import { MangaReaderComponent } from './manga-reader/manga-reader.component';


@NgModule({
  declarations: [
    MangaReaderComponent
  ],
  imports: [
    CommonModule,
    MangaReaderRoutingModule
  ]
})
export class MangaReaderModule { }
