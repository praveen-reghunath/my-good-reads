import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';

test('renders learn react link', () => {
  const { getByText } = render(<BookItem />);
  const linkElement = getByText(/javascript/i);
  expect(linkElement).toBeInTheDocument();
});
