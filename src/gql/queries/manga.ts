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
