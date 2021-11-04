import {Injectable} from "@angular/core";
import {Apollo, gql} from "apollo-angular";
import {FetchResult} from "@apollo/client/core";

import {LIKE_MANGA_MUTATION} from "src/gql/mutations/manga-like";
import {StarManga, StarMangaVariables} from "src/gql/generated/StarManga";
import {MangaFragment} from "src/gql/generated/MangaFragment";

import {AuthService} from "src/app/auth/services/auth.service";


@Injectable({
    providedIn: "root"
})
export class MangaStarService {

    constructor(
        private readonly _apollo: Apollo,
        private readonly _authService: AuthService,
    ) {
    }

    public likeManga(variables: StarMangaVariables) {
        const fragmentId = `Manga:${variables.mangaId}`;
        const fragment = gql`
            fragment MangaFragment on Manga {
                id
                isLikedByViewer
                likesCount
            }
        `;

        const mangaFragment = this._apollo.client.cache.readFragment<MangaFragment>({
            id: fragmentId,
            fragment,
        });

        const optimisticResponse: StarManga | undefined = mangaFragment ? {
            setMangaLiked: {
                __typename: "LikeMangaSuccess",
                manga: {
                    __typename: "Manga",
                    id: mangaFragment.id,
                    isLikedByViewer: variables.liked,
                    likesCount: variables.liked ? mangaFragment.likesCount + 1 : mangaFragment.likesCount - 1,
                }
            }
        } : undefined;

        return this._apollo.mutate({
            mutation: LIKE_MANGA_MUTATION,
            variables,
            optimisticResponse,
            update: (cache, result: FetchResult<StarManga>) => {
                if (result.data?.setMangaLiked.__typename !== "LikeMangaSuccess") {
                    return;
                }

                cache.writeFragment<MangaFragment>({
                    id: fragmentId,
                    fragment,
                    data: result.data.setMangaLiked.manga
                })
            }
        });
    }
}
