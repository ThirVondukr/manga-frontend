/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMangaPage
// ====================================================

export interface GetMangaPage_getMangaByTitleSlug_cover {
    __typename: "MangaArt";
    id: any;
    imageUrl: string;
}

export interface GetMangaPage_getMangaByTitleSlug_infos {
    __typename: "MangaInfo";
    id: any;
    lang: string;
    title: string;
    description: string;
}

export interface GetMangaPage_getMangaByTitleSlug_artists {
    __typename: "Author";
    id: any;
    name: string;
}

export interface GetMangaPage_getMangaByTitleSlug_writers {
    __typename: "Author";
    id: any;
    name: string;
}

export interface GetMangaPage_getMangaByTitleSlug {
    __typename: "Manga";
    id: any;
    title: string;
    isLikedByViewer: boolean;
    cover: GetMangaPage_getMangaByTitleSlug_cover | null;
    infos: GetMangaPage_getMangaByTitleSlug_infos[];
    artists: GetMangaPage_getMangaByTitleSlug_artists[];
    writers: GetMangaPage_getMangaByTitleSlug_writers[];
}

export interface GetMangaPage {
    getMangaByTitleSlug: GetMangaPage_getMangaByTitleSlug | null;
}

export interface GetMangaPageVariables {
    titleSlug: string;
}
