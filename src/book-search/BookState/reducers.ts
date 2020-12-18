import { BookState, BookInfo } from '../types';

export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

const addToFavorites = (book: BookInfo, state: BookState) => {
    if ((state.wishList.findIndex(item => item.id === book.id) === -1)) {
        const updatedCart = [...state.wishList, book];
        return { ...state, wishList: updatedCart };
    }
    else {
        return state;
    }
};

const removeFromFavorites = (bookId: string, state: BookState) => {
    console.log('Removing product with id: ' + bookId);
    const updatedWishList = state.wishList.filter(item => item.id !== bookId)
    return { ...state, wishList: updatedWishList };
};

export const bookSearchReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return addToFavorites(action.book, state);
        case REMOVE_FROM_FAVORITE:
            return removeFromFavorites(action.bookId, state);
        default:
            return state;
    }
};