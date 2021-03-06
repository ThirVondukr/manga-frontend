import {gql} from "apollo-angular";


export const LIKE_MANGA_MUTATION = gql`
    mutation StarManga($mangaId: UUID!, $liked: Boolean!) {
        setMangaLiked(mangaId: $mangaId, liked: $liked) {
            ... on LikeMangaSuccess {
                manga {
                    id
                    isLikedByViewer
                    likesCount
                }
            }
        }
    }
`;
