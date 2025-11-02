import React from 'react';
import { 
  Navbar, 
  Container, 
  Button,
  Badge 
} from 'react-bootstrap';

function Header({ playlistCount, onShowPlaylist }) {
  return (
    <Navbar bg="#4a3c5c" data-bs-theme="dark" expand="lg" className="main-bar">
      <Container>
<<<<<<< HEAD
        <Navbar.Brand href="/">VoxFinder</Navbar.Brand>
          <Button variant="warning" onClick={onShowPlaylist}>
            Playlist 
            <Badge bg="dark" className="ms-1">{playlistCount}</Badge>
          </Button>
=======
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="./LOGO.png"
            alt="Logo"
            width="35"
            height="35"
            className="me-2"
          />
          <span>VoxFinder</span>
        </Navbar.Brand>

        <Button variant="warning" onClick={onShowPlaylist}>
          Playlist
          <Badge bg="dark" className="ms-1">{playlistCount}</Badge>
        </Button>
>>>>>>> d1d8958d7ad95888b00b7d3ef420712d74862abc
      </Container>
    </Navbar>
  );
}

export default Header;