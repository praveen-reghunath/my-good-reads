import React, { useEffect, useState } from 'react';
import { getBooksByType } from './book-search.service';
import BookList from './BookList';

import './BookSearch.scss';

const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([]);
    const [timer, setTimer] = useState<any>(null);

    async function requestBooks(searchText: string) {
        if (searchText.length) {
            const allBooks = await getBooksByType(searchText);
            console.log(allBooks);
            setAllAvailableBooks(allBooks.items);
        }
        else {
            setAllAvailableBooks([]);
        }
    }

    useEffect(() => {
        requestBooks(bookType);
    }, [bookTypeToSearch]);

    const onSearchTextChanged = (text: string) => {
        updateBookType(text);

        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }

        if (text.length > 0) {
            const timerId = setTimeout(() => {
                updateBookTypeToSearch(text);
            }, 500);

            setTimer(timerId);
        }
        else {
            requestBooks(text);
        }

    };

    return (
        <div className="book-search">
            <div className="container">
                <div className="book--container">
                    <div className="search-params">
                        <div>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    updateBookTypeToSearch(bookType)
                                }}
                            >
                                <input
                                    className="full-width"
                                    autoFocus
                                    name="gsearch"
                                    type="search"
                                    value={bookType}
                                    placeholder="Search for books to add to your reading list and press Enter"
                                    onChange={e => onSearchTextChanged(e.target.value)}
                                />
                            </form>
                            {!bookType && (
                                <div className="empty">
                                    <p>
                                        Try searching for a topic, for example
                                        <a onClick={() => {
                                            updateBookType("Javascript");
                                            updateBookTypeToSearch("Javascript");
                                            requestBooks("Javascript");
                                        }}
                                        >
                                            {" "}
                                            "Javascript"
                                        </a>
                                    </p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                {
                    allAvailableBooks && (
                        <BookList items={allAvailableBooks} />
                    )
                }
            </div>
        </div>
    );
};

export default BookSearch;
