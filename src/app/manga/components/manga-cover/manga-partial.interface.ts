interface MangaCover {
    imageUrl: string
}

export interface MangaPartial {
    titleSlug: string
    cover: MangaCover | null
}
