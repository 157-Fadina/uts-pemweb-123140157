import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from '../components/searchForm.jsx';
import Header from '../components/header.jsx';
import { Container } from 'react-bootstrap';
import HeroCarousel from '../components/hero.jsx';

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroCarousel />
        <Container className="mt-4">
          
          <SearchForm />

          <section className="mt-4">
            <p className="results-placeholder">
              Hasil pencarian akan muncul di sini...
            </p>
          </section>

        </Container>
      </main>
    </>
  );
}

export default App;