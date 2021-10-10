/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {Pagination} from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UserMangaFollows
// ====================================================

export interface UserMangaFollows_getUserByUsername_followedManga_pageInfo {
    __typename: "PagePaginationPageInfo";
    hasNext: boolean;
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}

export interface UserMangaFollows_getUserByUsername_followedManga_items_cover {
    __typename: "MangaArt";
    id: any;
    imageUrl: string;
}

export interface UserMangaFollows_getUserByUsername_followedManga_items {
    __typename: "Manga";
    id: any;
    title: string;
    titleSlug: string;
    cover: UserMangaFollows_getUserByUsername_followedManga_items_cover | null;
}

export interface UserMangaFollows_getUserByUsername_followedManga {
    __typename: "MangaPagePagination";
    pageInfo: UserMangaFollows_getUserByUsername_followedManga_pageInfo;
    items: UserMangaFollows_getUserByUsername_followedManga_items[];
}

export interface UserMangaFollows_getUserByUsername {
    __typename: "User";
    id: any;
    followedManga: UserMangaFollows_getUserByUsername_followedManga;
}

export interface UserMangaFollows {
    getUserByUsername: UserMangaFollows_getUserByUsername | null;
}

export interface UserMangaFollowsVariables {
    username: string;
    pagination: Pagination;
}
