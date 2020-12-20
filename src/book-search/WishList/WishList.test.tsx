import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import WishList from './WishList';

describe("WishList component", () => {

  test('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDom.render(<WishList />, div);
  });

});
