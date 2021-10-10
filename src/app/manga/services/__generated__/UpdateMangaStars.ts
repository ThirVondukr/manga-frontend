/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UpdateMangaStars
// ====================================================

export interface UpdateMangaStars_getMangaById {
    __typename: "Manga";
    id: any;
    isStarredByViewer: boolean;
}

export interface UpdateMangaStars {
    getMangaById: UpdateMangaStars_getMangaById | null;
}

export interface UpdateMangaStarsVariables {
    mangaId: any;
}
