import React, { useContext } from "react";
import WishListItem from '../WishListItem';
import BookContext from '../BookState/BookContext';

import './WishList.scss';

interface Props {

}

function WishList(props: Props) {
    const context = useContext(BookContext);
    const { wishList } = context;

    const onItemRemove = (bookId: string) => {
        context.removeFromFavorites(bookId);
    };

    return (
        <div className="wish-list">
            <div className="heading">
                My Reading Wishlist (<span>{wishList.length}</span>)
            </div>
            {
                (wishList.length > 0) && (
                    <ul className="items">
                        {
                            wishList.map(item => <WishListItem key={item.id} id={item.id} onRemove={onItemRemove} label={item.volumeInfo.title} />)
                        }
                    </ul>
                )
            }
        </div>

    );
}

export default WishList;
