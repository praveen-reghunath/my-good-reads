export interface BookVolumeInfo {
    authors: Array<string>,
    description: string
    imageLinks: { smallThumbnail: string, thumbnail: string }
    publishedDate: string,
    publisher: string
    title: string
}

export interface BookInfo {
    id: string
    volumeInfo: BookVolumeInfo
}

export interface BookState {
    wishList: Array<BookInfo>,
    addToFavorites: Function,
    removeFromFavorites: Function
}
