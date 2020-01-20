import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <Card style={{ width: '20rem', marginTop: '50px', marginBottom: '25px' }}>
      <Card.Img variant="top" src={poster} alt={title} title={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {summary.slice(0, 120)+"..."}
        </Card.Text>
        <Button variant="primary">자세히 보기</Button>
      </Card.Body>
    </Card>

  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
