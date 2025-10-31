import React from 'react';
import { 
  Navbar, 
  Container, 
  Button
} from 'react-bootstrap';

// Ini adalah komponen Header (Komponen ke-2)
function Header() {
  return (
    // Semua kode Navbar dipindah ke sini
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="main-bar">
      <Container>
        <Navbar.Brand href="/">VoxFinder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="warning">
            {/* Angka '0' ini masih statis, akan kita "hidupkan" nanti */}
            Playlist <span className="badge bg-secondary ms-1">0</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

