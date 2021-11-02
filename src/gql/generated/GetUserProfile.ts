/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserProfile
// ====================================================

export interface GetUserProfile_getUserByUsername {
    __typename: "User";
    id: any;
    avatarUrl: string;
    username: string;
    joinedAt: any;
}

export interface GetUserProfile {
    getUserByUsername: GetUserProfile_getUserByUsername | null;
}

export interface GetUserProfileVariables {
    username: string;
}
