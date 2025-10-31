import React, { useState } from "react";
import SearchForm from "./components/SearchForm.jsx";
import ResultsTable from "./components/ResultsTable.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/HeroCarousel.jsx";
import "./App.css"; 


function App() {
  const [results, setResults] = useState([]);      
  const [loading, setLoading] = useState(false);    
  const [error, setError] = useState(null);   

  const handleSearch = async (searchParams) => {
    const { term, media, sort, limit } = searchParams;

    setLoading(true);
    setError(null);

    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=${media}&limit=${limit}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal memuat data dari API.");

      const data = await response.json();

      let sortedResults = data.results;

      if (sort === "releaseDate") {
        sortedResults = sortedResults.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      } else if (sort === "collectionPrice") {
        sortedResults = sortedResults.sort((a, b) => (b.collectionPrice || 0) - (a.collectionPrice || 0));
      }

      setResults(sortedResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <main className="container">
        <SearchForm onSearch={handleSearch} />

        {loading && <p className="text-center text-light mt-3">🔄 Sedang memuat...</p>}
        {error && <p className="text-center text-danger mt-3">❌ {error}</p>}

        {!loading && !error && results.length > 0 && (
          <ResultsTable results={results} />
        )}

        {!loading && !error && results.length === 0 && (
          <p className="results-placeholder">Hasil pencarian akan muncul di sini...</p>
        )}
      </main>
    </div>
  );
}

export default App;
