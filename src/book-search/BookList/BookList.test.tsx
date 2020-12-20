import React from 'react';
import { render } from '@testing-library/react';
import BookList from './BookList';

describe("BookList component", () => {

  const defaultProps = {
    items: [
      {
        id: "1",
        volumeInfo: {
          authors: ["Praveen"],
          description: 'Test description',
          imageLinks: { smallThumbnail: "http://test/image.jpg", thumbnail: "http://test/image.jpg" },
          publishedDate: "2020-01-01",
          publisher: "Test pub",
          title: "test title"
        }
      }
    ]
  }

  test('renders learn react link', () => {
    const { getByText } = render(<BookList {...defaultProps} />);
    const linkElement = getByText(/test title/i);
    expect(linkElement).toBeInTheDocument();
  });

});