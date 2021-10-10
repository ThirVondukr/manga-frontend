import {gql} from "apollo-angular";


export const GET_MANGA_PAGE_QUERY = gql`
    query GetMangaPage($titleSlug: String!) {
        getMangaByTitleSlug(titleSlug: $titleSlug) {
            id
            title
            isLikedByViewer
            cover {
                id
                imageUrl
            }
            infos {
                id
                lang
                title
                description
            }
            artists {
                id
                name
            }
            writers {
                id
                name
            }
        }
    }
`;


export const GET_MANGA_CHAPTERS_QUERY = gql`
    query GetMangaChapters(
        $mangaId: UUID!,
        $page: Int = 1,
        $pageSize: Int = 10,
    ) {
        getMangaById(
            mangaId: $mangaId,
        ) {
            id
            chapters(pagination: {page: $page, pageSize: $pageSize}) {
                items {
                    id
                    number
                    publishedAt
                    title
                    language
                }
                pageInfo {
                    hasNext
                    page
                    pageSize
                    totalPages
                    totalCount
                }
            }
        }
    }
`;
