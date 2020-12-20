import React from 'react';
import { render } from '@testing-library/react';
import WishListItem from './WishListItem';


describe("WishList component", () => {
  const defaultProps = {
    id: "testId",
    label: "testlabel",
    onRemove: () => { }
  };

  test('renders learn react link', () => {
    const { getByText } = render(<WishListItem {...defaultProps} />);
    const linkElement = getByText(/testlabel/i);
    expect(linkElement).toBeInTheDocument();
  });

});
