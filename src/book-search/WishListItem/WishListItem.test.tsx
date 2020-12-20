import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WishListItem from './WishListItem';

describe("WishList component", () => {
  const defaultProps = {
    id: "testId",
    label: "testlabel",
    onRemove: jest.fn()
  };

  test('renders with item label', () => {
    const { getByText } = render(<WishListItem {...defaultProps} />);
    const linkElement = getByText(/testlabel/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders with item label', () => {
    const { getByTestId } = render(<WishListItem {...defaultProps} />);
    fireEvent.click(getByTestId("btn-remove"))
    expect(defaultProps.onRemove).toHaveBeenCalledTimes(1);
  });

});
