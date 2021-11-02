/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserChaptersFeed
// ====================================================

export interface UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node_manga_cover {
  __typename: "MangaArt";
  id: any;
  imageUrl: string;
}

export interface UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node_manga {
  __typename: "Manga";
  id: any;
  title: string;
  titleSlug: string;
  cover: UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node_manga_cover | null;
}

export interface UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node {
  __typename: "MangaChapter";
  manga: UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node_manga;
  id: any;
  number: string;
  publishedAt: any;
  title: string | null;
}

export interface UserChaptersFeed_getUserByUsername_chaptersFeed_edges {
  __typename: "MangaChapterEdge";
  node: UserChaptersFeed_getUserByUsername_chaptersFeed_edges_node;
}

export interface UserChaptersFeed_getUserByUsername_chaptersFeed_pageInfo {
  __typename: "PageInfo";
  endCursor: string;
  hasNextPage: boolean;
}

export interface UserChaptersFeed_getUserByUsername_chaptersFeed {
  __typename: "MangaChapterConnection";
  edges: UserChaptersFeed_getUserByUsername_chaptersFeed_edges[];
  pageInfo: UserChaptersFeed_getUserByUsername_chaptersFeed_pageInfo;
}

export interface UserChaptersFeed_getUserByUsername {
  __typename: "User";
  id: any;
  chaptersFeed: UserChaptersFeed_getUserByUsername_chaptersFeed;
}

export interface UserChaptersFeed {
  getUserByUsername: UserChaptersFeed_getUserByUsername | null;
}

export interface UserChaptersFeedVariables {
  username: string;
  after?: any | null;
  first: number;
}
