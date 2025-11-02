import React, { useState, useEffect } from "react";
import { Offcanvas, Badge, ListGroup, Image, Button, Alert } from "react-bootstrap";
import SearchForm from "./components/SearchForm.jsx";
import ResultsTable from "./components/ResultsTable.jsx"; 
import Header from "./components/Header.jsx";
import Hero from "./components/HeroCarousel.jsx";
import LoadingGrid from "./components/LoadingGrid.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css"; 

function App() {
  const [results, setResults] = useState([]);      
  const [loading, setLoading] = useState(false);    
  const [error, setError] = useState(null);   
  const [playlist, setPlaylist] = useState(() => {
    const savedPlaylist = localStorage.getItem('myAppPlaylist');
    return savedPlaylist ? JSON.parse(savedPlaylist) : [];
  });
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null); 
  const [playingTrackId, setPlayingTrackId] = useState(null); 
  
  useEffect(() => {
    localStorage.setItem('myAppPlaylist', JSON.stringify(playlist));
  }, [playlist]);

  const handleAddTrack = (track) => {
    if (!playlist.find(item => item.trackId === track.trackId)) {
      setPlaylist(prevPlaylist => [...prevPlaylist, track]);
    } else {
      alert("Lagu sudah ada di playlist!");
    }
  };

  const handlePlayTrack = (track) => {
    if (currentAudio) {
      currentAudio.pause();
    }

    if (playingTrackId === track.trackId) {
      setCurrentAudio(null);
      setPlayingTrackId(null);
    } else {
      const newAudio = new Audio(track.previewUrl);
      newAudio.play();
      
      setCurrentAudio(newAudio);
      setPlayingTrackId(track.trackId);

      newAudio.onended = () => {
        setCurrentAudio(null);
        setPlayingTrackId(null);
      };
    }
  };

  const handleRemoveFromPlaylist = (trackIdToRemove) => {
    setPlaylist(prevPlaylist => prevPlaylist.filter(track => track.trackId !== trackIdToRemove));
    
    if (playingTrackId === trackIdToRemove && currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setPlayingTrackId(null);
    }
  };

  const handleClosePlaylist = () => setShowPlaylist(false);
  const handleShowPlaylist = () => setShowPlaylist(true);

  const handleSearch = async (searchParams) => {
  const { term, media, sort, limit } = searchParams;
  setLoading(true);
  setError(null);

  if (!term || term.trim() === "") {
    setError("Masukkan kata kunci pencarian terlebih dahulu.");
    setLoading(false);
    return;
  }

  
  try {
    const mediaParam = media === "all" ? "" : `&media=${media}`;
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}${mediaParam}&limit=${limit}`;
    console.log("🔍 Fetching URL:", url);
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("Gagal memuat data dari API.");
    const data = await response.json();

    if (data.results.length === 0) {
      setError("Tidak ditemukan hasil untuk pencarian ini.");
      setResults([]);
      return;
    }

    let sortedResults = data.results;
    const getPrice = (item) => item.trackPrice || item.collectionPrice || 0;

    if (sort === "releaseDate_desc")
      sortedResults.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    else if (sort === "releaseDate_asc")
      sortedResults.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    else if (sort === "price_desc")
      sortedResults.sort((a, b) => getPrice(b) - getPrice(a));
    else if (sort === "price_asc")
      sortedResults.sort((a, b) => getPrice(a) - getPrice(b));

    setResults(sortedResults);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="App">
      <Header 
        playlistCount={playlist.length} 
        onShowPlaylist={handleShowPlaylist} 
      />
      
      <Hero />

      <main className="container">
        <SearchForm onSearch={handleSearch} />

        {loading && <LoadingGrid />}

        {error && (
          <Alert variant="danger" className="mt-4">
            <Alert.Heading>❌ Terjadi Kesalahan</Alert.Heading>
            <p>{error}</p>
          </Alert>
        )}

        {!loading && !error && results.length > 0 && (
          <ResultsTable 
            results={results}
            onPlay={handlePlayTrack}           
            onAddToPlaylist={handleAddTrack} 
            playingTrackId={playingTrackId}
          />
        )}

        {!loading && !error && results.length === 0 && (
          <p className="results-placeholder">
            Hasil pencarian akan muncul di sini...
          </p>
        )}
      </main>
      <Footer />

      <Offcanvas 
        show={showPlaylist} 
        onHide={handleClosePlaylist} 
        placement="end"
        style={{ backgroundColor: '#121212', color: 'white' }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Playlist Saya</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {playlist.length === 0 ? (
            <div className="text-center" style={{ marginTop: '40%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-music-note" viewBox="0 0 16 16">
                <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                <path fillRule="evenodd" d="M9 3v10H8V3z"/>
                <path d="M8 2.5a.5.5 0 0 1 .5.5v10.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5"/>
              </svg>
              <h5 className="mt-3">Playlist kosong</h5>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Tambahkan lagu dari hasil pencarian
              </p>
            </div>
          ) : (
            <ListGroup variant="flush">
              {playlist.map(track => (
                <ListGroup.Item 
                  key={track.trackId} 
                  className="d-flex justify-content-between align-items-center bg-transparent text-white border-secondary mb-2 p-2 rounded" 
                  style={{ backgroundColor: playingTrackId === track.trackId ? '#4a3c5c' : 'transparent' }} 
                >
                  <Image src={track.artworkUrl100} rounded style={{width: '60px', height: '60px', marginRight: '15px'}} />
                  <div className="flex-grow-1" style={{minWidth: 0}}>
                    <div className="fw-bold text-truncate">{track.trackName}</div>
                    <div className="text-muted text-truncate" style={{fontSize: '0.8rem'}}>{track.artistName}</div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    {track.previewUrl && ( 
                      <Button 
                        variant="link" 
                        className="text-white p-0 me-2"
                        onClick={() => handlePlayTrack(track)}
                      >
                        {playingTrackId === track.trackId ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                          </svg>
                        )}
                      </Button>
                    )}
                    <Button 
                      variant="link" 
                      className="text-danger p-0" 
                      onClick={() => handleRemoveFromPlaylist(track.trackId)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  );
}

export default App;