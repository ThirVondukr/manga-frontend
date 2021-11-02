import {gql} from "apollo-angular";


export const MangaHomeQuery = gql`
    query MangaHome {
        popularManga {
            id
            likesCount
            title
            titleSlug
            isLikedByViewer
            cover {
                id
                imageUrl
            }
        },
        recentChapters(first: 12) {
            edges {
                node {
                    id
                    number
                    title
                    publishedAt
                    manga {
                        id
                        title
                        titleSlug
                        cover {
                            id
                            imageUrl
                        }
                    }
                }
            }
        }
    }
`;
