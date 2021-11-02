import {gql} from "apollo-angular";


export const GetPopularMangaQuery = gql`
    query GetPopularManga {
        popularManga {
            id
            likesCount
            title
            cover {
                id
                imageUrl
            }
        }
    }
`;
