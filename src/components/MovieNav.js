import React from 'react';
import { Navbar } from 'react-bootstrap';

const MovieNav = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">MoviesFetchApi</Navbar.Brand>
    </Navbar>
    </>
  );
};

export default MovieNav;
