import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';

describe('BookItem component', () => {
  const defaultProps = {
    data: {
      id: "1",
      volumeInfo: {
        authors: ["Praveen"],
        description: 'Test description',
        imageLinks: { smallThumbnail: "http://test/image.jpg", thumbnail: "http://test/image.jpg" },
        publishedDate: "2020-01-01",
        publisher: "Test pub",
        title: "test title"
      }
    },
    className: "testClass"
  };

  beforeEach(() => {

  });

  test('renders without error', () => {
    const { getByText } = render(<BookItem {...defaultProps} />);
    const linkElement = getByText(/test title/i);
    expect(linkElement).toBeInTheDocument();
  });
});