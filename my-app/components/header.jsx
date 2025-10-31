import React from 'react';
import { 
  Navbar, 
  Container, 
  Button
} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="grey" data-bs-theme="dark" expand="lg" className="main-bar">
      <Container>
        <Navbar.Brand href="/">VoxFinder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="warning">
            Playlist <span className="badge bg-secondary ms-1">0</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

