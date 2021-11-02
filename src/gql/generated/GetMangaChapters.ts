/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMangaChapters
// ====================================================

export interface GetMangaChapters_getMangaById_chapters_items {
  __typename: "MangaChapter";
  id: any;
  number: string;
  publishedAt: any;
  title: string | null;
  language: string;
}

export interface GetMangaChapters_getMangaById_chapters_pageInfo {
  __typename: "PagePaginationPageInfo";
  hasNext: boolean;
  page: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

export interface GetMangaChapters_getMangaById_chapters {
  __typename: "MangaChaptersPaginationResponse";
  items: GetMangaChapters_getMangaById_chapters_items[];
  pageInfo: GetMangaChapters_getMangaById_chapters_pageInfo;
}

export interface GetMangaChapters_getMangaById {
  __typename: "Manga";
  id: any;
  chapters: GetMangaChapters_getMangaById_chapters;
}

export interface GetMangaChapters {
  getMangaById: GetMangaChapters_getMangaById | null;
}

export interface GetMangaChaptersVariables {
  mangaId: any;
  page?: number | null;
  pageSize?: number | null;
}
