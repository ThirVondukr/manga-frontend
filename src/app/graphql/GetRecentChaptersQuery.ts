import {gql} from "apollo-angular";


export const GetRecentChaptersQuery = gql`
    query GetRecentChapters($first: Int!, $after: DateTime) {
        recentChapters(first: $first, after: $after) {
            pageInfo {
                endCursor
                hasNextPage
            }
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
