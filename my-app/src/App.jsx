import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from '../components/searchForm';
import Header from '../components/header';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />

      <main>
        <Container className="mt-4">
          
          <SearchForm />

          <section className="mt-4">
            <p>Hasil pencarian akan muncul di sini...</p>
          </section>

        </Container>
      </main>
    </>
  );
}

export default App;