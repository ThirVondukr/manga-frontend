/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecentChapters
// ====================================================

export interface GetRecentChapters_recentChapters_pageInfo {
  __typename: "PageInfo";
  endCursor: string;
  hasNextPage: boolean;
}

export interface GetRecentChapters_recentChapters_edges_node_manga_cover {
  __typename: "MangaArt";
  id: any;
  imageUrl: string;
}

export interface GetRecentChapters_recentChapters_edges_node_manga {
  __typename: "Manga";
  id: any;
  title: string;
  titleSlug: string;
  cover: GetRecentChapters_recentChapters_edges_node_manga_cover | null;
}

export interface GetRecentChapters_recentChapters_edges_node {
  __typename: "MangaChapter";
  id: any;
  number: number;
  title: string | null;
  publishedAt: any;
  manga: GetRecentChapters_recentChapters_edges_node_manga;
}

export interface GetRecentChapters_recentChapters_edges {
  __typename: "MangaChapterEdge";
  node: GetRecentChapters_recentChapters_edges_node;
}

export interface GetRecentChapters_recentChapters {
  __typename: "MangaChapterConnection";
  pageInfo: GetRecentChapters_recentChapters_pageInfo;
  edges: GetRecentChapters_recentChapters_edges[];
}

export interface GetRecentChapters {
  recentChapters: GetRecentChapters_recentChapters;
}

export interface GetRecentChaptersVariables {
  first: number;
  after?: any | null;
}
