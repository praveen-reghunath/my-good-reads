import React, { useEffect, useState } from "react";
import { BookInfo } from '../types';

import BookItem from '../BookItem';

export interface BookListProps {
    items: Array<BookInfo>
}

function BookList(props: BookListProps) {
    const { items = [] } = props;
    return (
        <section className="book-list">
            {
                items.map(item => <BookItem data={item} key={item.id} className="item" />)
            }
        </section>
    );
}

export default BookList;
