import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './BookItem.scss';
import { BookInfo } from '../types';
import BookContext from '../BookState/BookContext';

export interface BookItemProps {
    className: string,
    data: BookInfo
}

function BookItem(props: BookItemProps) {
    const { className = '', data } = props;
    const { title, publisher, publishedDate, description, authors = [], imageLinks: { thumbnail = '' } = {} } = data.volumeInfo;
    const author = authors.join(',');
    const context = useContext(BookContext);

    return (
        <article className={`book-item ${className}`}>
            <div className="primary-info">
                <picture className="book-image">
                    <source srcSet={thumbnail} type="image/webp" />
                    <img src={thumbnail} alt="image of the book" />
                </picture>
                <div className="book-details">
                    <div className="heading">
                        <h6 className="title">{title}</h6>
                        <button className="btn-add-to-favorites" onClick={(e) => context.addToFavorites(data)}>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="basic-info">
                        <div className="author">
                            <span>by:</span>
                            <span>{author}</span>
                        </div>
                        <div className="published-date">{publishedDate}</div>
                        <div className="publisher"><span>Publisher:</span>{publisher}</div>
                    </div>
                    <div className="description">{description}</div>
                </div>
            </div>

        </article>
    );
}

export default BookItem;
