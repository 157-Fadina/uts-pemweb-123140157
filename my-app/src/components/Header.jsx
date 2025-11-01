import React from 'react';
import { 
  Navbar, 
  Container, 
  Button
} from 'react-bootstrap';

// Terima props playlistCount
function Header({ playlistCount }) {
  return (
    <Navbar bg="grey" data-bs-theme="dark" expand="lg" className="main-bar">
      <Container>
        <Navbar.Brand href="/">VoxFinder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="warning">
            {/* Tampilkan count dari props */}
            Playlist <span className="badge bg-secondary ms-1">{playlistCount}</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
