import React, { useReducer } from 'react';

import BookContext from './BookContext';
import { bookSearchReducer, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './reducers';

const GlobalState = (props: any) => {
  const [bookState, dispatch] = useReducer(bookSearchReducer, { wishList: [] });

  const addToFavorites = (book: any) => {
    dispatch({ type: ADD_TO_FAVORITE, book });
  };

  const removeFromFavorites = (bookId: any) => {
    dispatch({ type: REMOVE_FROM_FAVORITE, bookId });
  };

  return (
    <BookContext.Provider
      value={{
        wishList: bookState.wishList,
        addToFavorites,
        removeFromFavorites
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default GlobalState;