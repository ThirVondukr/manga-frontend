import {gql} from "apollo-angular";


export const GET_USER_MANGA_FOLLOWS_QUERY = gql`
    query UserMangaFollows($username: String!, $pagination: Pagination!) {
        getUserByUsername(username: $username) {
            id
            followedManga(pagination: $pagination) {
                pageInfo {
                    hasNext
                    page
                    pageSize
                    totalCount
                    totalPages
                }
                items {
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
`;
