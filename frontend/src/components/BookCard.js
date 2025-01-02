import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function BookCard({ Books }) {
  return (
    <Container className='d-flex flex-wrap justify-content-center'>
      {Books && Books.length > 0 ? (
        Books.map((i, idx) => (
          <Card key={i['Book-title'] || idx} className='mx-3 my-3' style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={i['Image-URL-M'] || 'default-image.jpg'} // Fallback image
              style={{ height: '20rem' }}
            />
            <Card.Body>
              <Card.Title>{i['Book-title']}</Card.Title>
              <Card.Text>
                <p>{i['Book-author']}</p>
                <p>{`${Number(i['avg_rating']).toFixed(2)}/10`}</p>
                <p>{`${i['num_ratings']} ratings`}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No books available</p> // Display a message when there are no books
      )}
    </Container>
  );
}

BookCard.defaultProps = {
  Books: [],
};

export default BookCard;
