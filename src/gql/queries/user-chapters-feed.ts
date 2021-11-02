import {gql} from "apollo-angular";


export const UserChaptersFeedQuery = gql`
    query UserChaptersFeed($username: String!, $after: DateTime = null, $first: Int!) {
        getUserByUsername(username: $username) {
            id
            chaptersFeed(after: $after, first: $first) {
                edges {
                    node {
                        manga {
                            id
                            title
                            titleSlug
                            cover {
                                id
                                imageUrl
                            }
                        }
                        id
                        number
                        publishedAt
                        title
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }
`;
