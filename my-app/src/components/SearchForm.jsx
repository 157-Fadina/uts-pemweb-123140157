import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [limit, setLimit] = useState(25);

  const handleSubmit = (event) => {
    event.preventDefault();    

    const searchParams = {
      term: searchTerm,
      media: mediaType,
      sort: sortBy,
      limit: limit
    };

    onSearch(searchParams);
    console.log('Mencari dengan parameter:', searchParams);
  };

  return (
    <section className="search-container shadow-sm">
      <h2>Temukan Musik Favorit Anda</h2>

      <Form onSubmit={handleSubmit}>
        <Row className="g-2 my-3 align-items-center">
          <Col xs={12} md={6}>
            <Form.Control
              id="searchTerm"
              name="searchTerm"
              placeholder="Cari artis, album, atau lagu..."
              required
              minLength={3}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>

          <Col xs={15} md={3}>
            <Form.Select
              id="mediaType"
              name="mediaType"
              className="media-type-select"
              value={mediaType}
              onChange={(e) => setMediaType(e.target.value)}
            >
              <option value="all">Semua</option>
              <option value="artist">Artis</option>
              <option value="Song">Lagu</option>
              <option value="album">Album</option>
            </Form.Select>
          </Col>

          <Col xs={12} md={3}>
            <Button variant="primary" type="submit" className="w-100">
              Cari
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="d-flex flex-column flex-md-row justify-content-start gap-3 mt-3">
        <Form.Group className="d-flex align-items-center" controlId="sortBySelect">
          <Form.Label className="me-2 mb-0">Urutkan:</Form.Label>
          <Form.Select
            size="sm"
            style={{ maxWidth: '150px' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            name="sortBy"
          >
            <option value="relevance">Relevansi</option>
            <option value="releaseDate">Tanggal Rilis</option>
            <option value="collectionPrice">Harga</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="d-flex align-items-center" controlId="limitInput">
          <Form.Label className="me-2 mb-0">Limit:</Form.Label>
          <Form.Control
            type="number"
            size="sm"
            min={1}
            max={50}
            style={{ maxWidth: '100px' }}
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            name="limit"
          />
        </Form.Group>
      </div>
    </section>
  );
}

export default SearchForm;
