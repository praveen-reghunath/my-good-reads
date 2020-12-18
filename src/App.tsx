import React from 'react';
import BookSearch from './book-search/BookSearch';
import WishList from './book-search/WishList';
import GlobalState from './book-search/BookState';

import './styles/App.scss';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header--content">
          <h1>My Good Reads</h1>
        </div>
      </header>
      <main>
        <GlobalState>
          <BookSearch />
          <WishList />
        </GlobalState>
      </main>
    </div>
  );
}

export default App;
