/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StarManga
// ====================================================

export interface StarManga_setMangaLiked_NotAuthenticated {
  __typename: "NotAuthenticated" | "NotFound";
}

export interface StarManga_setMangaLiked_LikeMangaSuccess_manga {
  __typename: "Manga";
  id: any;
  isLikedByViewer: boolean;
  likesCount: number;
}

export interface StarManga_setMangaLiked_LikeMangaSuccess {
  __typename: "LikeMangaSuccess";
  manga: StarManga_setMangaLiked_LikeMangaSuccess_manga;
}

export type StarManga_setMangaLiked = StarManga_setMangaLiked_NotAuthenticated | StarManga_setMangaLiked_LikeMangaSuccess;

export interface StarManga {
  setMangaLiked: StarManga_setMangaLiked;
}

export interface StarMangaVariables {
  mangaId: any;
  liked: boolean;
}
