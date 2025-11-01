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
        <Navbar.Brand href="/">VoxFinder</Navbar.Brand>
          <Button variant="warning" onClick={onShowPlaylist}>
            Playlist 
            <Badge bg="dark" className="ms-1">{playlistCount}</Badge>
          </Button>
      </Container>
    </Navbar>
  );
}

export default Header;