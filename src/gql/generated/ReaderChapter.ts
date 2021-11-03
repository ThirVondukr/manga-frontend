/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReaderChapter
// ====================================================

export interface ReaderChapter_getChapterById_pages {
  __typename: "MangaPageType";
  id: number;
  imageUrl: string;
  number: number;
}

export interface ReaderChapter_getChapterById {
  __typename: "MangaChapter";
  pages: ReaderChapter_getChapterById_pages[];
  title: string | null;
  id: any;
  number: number;
  numberExtra: number | null;
}

export interface ReaderChapter {
  getChapterById: ReaderChapter_getChapterById;
}

export interface ReaderChapterVariables {
  chapterId: any;
}
