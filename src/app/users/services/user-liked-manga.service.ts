import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {
    UserMangaFollows,
    UserMangaFollowsVariables
} from "src/app/users/graphql/__generated__/UserMangaFollows";
import {GET_USER_MANGA_FOLLOWS_QUERY} from "src/app/users/graphql/get-user-manga-follows.query";


@Injectable({
    providedIn: "root"
})
export class UserLikedMangaService {

    constructor(
        private readonly _apollo: Apollo,
    ) {
    }

    public getUserMangaFollows(variables: UserMangaFollowsVariables) {
        return this._apollo.watchQuery<UserMangaFollows>({
            query: GET_USER_MANGA_FOLLOWS_QUERY,
            variables,
            fetchPolicy: "cache-and-network",
        }).valueChanges;
    }
}
