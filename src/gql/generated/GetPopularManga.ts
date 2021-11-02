/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPopularManga
// ====================================================

export interface GetPopularManga_popularManga_cover {
    __typename: "MangaArt";
    id: any;
    imageUrl: string;
}

export interface GetPopularManga_popularManga {
    __typename: "Manga";
    id: any;
    likesCount: number;
    title: string;
    cover: GetPopularManga_popularManga_cover | null;
}

export interface GetPopularManga {
    popularManga: GetPopularManga_popularManga[];
}
