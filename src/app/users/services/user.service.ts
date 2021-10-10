import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {Apollo} from "apollo-angular";
import {GET_USER_PROFILE_QUERY} from "src/app/graphql/GetUserProfileQuery";
import {GetUserProfile} from "src/app/graphql/__generated__/GetUserProfile";


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
