
import React, { createContext } from "react";
import { BookInfo } from '../types';

export default createContext({
  wishList: new Array<BookInfo>(),
  addToFavorites: (book: BookInfo) => { },
  removeFromFavorites: (bookId: string) => { }
});