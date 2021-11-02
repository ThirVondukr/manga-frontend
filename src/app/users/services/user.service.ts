import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {Apollo} from "apollo-angular";

import {GetUserProfile} from "src/gql/generated/GetUserProfile";
import {GET_USER_PROFILE_QUERY} from "src/gql/queries/user-profile";


@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(
        private readonly _apollo: Apollo
    ) {
    }

    public getUserByUsername(username: string) {
        return this._apollo
            .watchQuery<GetUserProfile>({
                query: GET_USER_PROFILE_QUERY,
                variables: {username},
                pollInterval: 60_000,
            })
            .valueChanges
            .pipe(map(res => res.data.getUserByUsername));
    }
}
