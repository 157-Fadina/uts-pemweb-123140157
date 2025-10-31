import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { 
  Navbar, 
  Container, 
  Button, 
  Form, 
  InputGroup 
} from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="main-bar">
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

      <main>
        <Container className="mt-4">
          <section className="p-4 bg-light rounded shadow-sm text-center search-container">
            <h2>Temukan Musik Favorit Anda</h2>

            <Form>
              <InputGroup className="my-3">
                <Form.Control
                  placeholder="Cari artis, album, atau lagu..."
                />
                <Form.Select style={{ maxWidth: '120px' }}>
                  <option value="all">Semua</option>
                  <option value="artist">Artis</option>
                  <option value="album">Album</option>
                  <option value="song">Lagu</option>
                </Form.Select>
                <Button variant="primary" type="submit">Cari</Button>
              </InputGroup>
            </Form>

            <div className="d-flex justify-content-start">
              <Form.Group className="d-flex align-items-center">
                <Form.Label className="me-2 mb-0">Urutkan:</Form.Label>
                <Form.Select size="sm" style={{ maxWidth: '150px' }}>
                  <option value="relevance">Relevansi</option>
                  <option value="popularity">Popularitas</option>
                  <option value="newest">Terbaru</option>
                </Form.Select>
              </Form.Group>
            </div>
          </section>

          <section className="mt-4">
            <p>Hasil pencarian akan muncul di sini...</p>
          </section>
        </Container>
      </main>
    </>
  );
}

export default App;