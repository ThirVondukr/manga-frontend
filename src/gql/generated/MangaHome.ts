/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MangaHome
// ====================================================

export interface MangaHome_popularManga_cover {
  __typename: "MangaArt";
  id: any;
  imageUrl: string;
}

export interface MangaHome_popularManga {
  __typename: "Manga";
  id: any;
  likesCount: number;
  title: string;
  titleSlug: string;
  isLikedByViewer: boolean;
  cover: MangaHome_popularManga_cover | null;
}

export interface MangaHome_recentChapters_edges_node_manga_cover {
  __typename: "MangaArt";
  id: any;
  imageUrl: string;
}

export interface MangaHome_recentChapters_edges_node_manga {
  __typename: "Manga";
  id: any;
  title: string;
  titleSlug: string;
  cover: MangaHome_recentChapters_edges_node_manga_cover | null;
}

export interface MangaHome_recentChapters_edges_node {
  __typename: "MangaChapter";
  id: any;
  number: string;
  title: string | null;
  publishedAt: any;
  manga: MangaHome_recentChapters_edges_node_manga;
}

export interface MangaHome_recentChapters_edges {
  __typename: "MangaChapterEdge";
  node: MangaHome_recentChapters_edges_node;
}

export interface MangaHome_recentChapters {
  __typename: "MangaChapterConnection";
  edges: MangaHome_recentChapters_edges[];
}

export interface MangaHome {
  popularManga: MangaHome_popularManga[];
  recentChapters: MangaHome_recentChapters;
}
