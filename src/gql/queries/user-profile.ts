import {gql} from "apollo-angular";


export const GET_USER_PROFILE_QUERY = gql`
    query GetUserProfile($username: String!) {
        getUserByUsername(username: $username) {
            id
            avatarUrl
            username
            joinedAt
        }
    }
`;
