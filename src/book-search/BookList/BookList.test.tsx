import React from 'react';
import { render } from '@testing-library/react';
import BookList from './BookList';

test('renders learn react link', () => {
  const { getByText } = render(<BookList />);
  const linkElement = getByText(/javascript/i);
  expect(linkElement).toBeInTheDocument();
});
