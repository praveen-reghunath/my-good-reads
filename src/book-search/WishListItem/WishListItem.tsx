import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './WishListItem.scss';

interface Props {
    id: string;
    label: string;
    onRemove: Function
}

function WishListItem(props: Props) {
    const { label, id, onRemove } = props;

    const onCloseClick = () => {
        onRemove(id);
    }

    return (
        <li className="wish-list-item">
            <span className="item-label">{label}</span>
            <span className="remove">
                <FontAwesomeIcon data-testid="btn-remove" icon={faTrashAlt} onClick={onCloseClick} />
            </span>
        </li>
    );
}

export default WishListItem;