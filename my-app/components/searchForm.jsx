import React, { useState } from 'react'; 
import { 
  Button, 
  Form, 
  InputGroup 
} from 'react-bootstrap';

function SearchForm() {
  
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
    
    console.log("Mencari dengan parameter:", searchParams);
  };

  return (
    <section className="p-4 bg-light rounded shadow-sm text-center search-container">
      <h2>Temukan Musik Favorit Anda</h2>

      <Form onSubmit={handleSubmit}>
        <InputGroup className="my-3">
          
          <Form.Control
            id="searchTerm" 
            name="searchTerm" 
            placeholder="Cari artis, album, atau lagu..."
            required
            minLength={3}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <Form.Select 
            id="mediaType" 
            name="mediaType" 
            style={{ maxWidth: '120px' }}
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="track_name">Track Name</option>
            <option value="artist">Artist</option>
            <option value="price">Price</option>
          </Form.Select>
          
          <Button variant="primary" type="submit">Cari</Button>
        </InputGroup>
      </Form>

      <div className="d-flex flex-wrap justify-content-start gap-3">
        
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

        <Button variant="primary" type="submit" className="tombol-cari-kustom">
            Cari
        </Button>
      </div>
    </section>
  );
}

export default SearchForm;