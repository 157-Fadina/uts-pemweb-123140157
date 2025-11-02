import React from "react";
function SongCard({ track, onPlay, onAddToPlaylist, playingTrackId }) {
  
  const artwork = track.artworkUrl100 || 'https://placehold.co/100x100/4a3c5c/FFF?text=?';
  const title = track.trackName || track.collectionName || "Tanpa Judul";
  const artist = track.artistName || "Artis Tidak Dikenal";
  
  let price = "$N/A";
  if (track.trackPrice && track.trackPrice > 0) {
    price = `$${track.trackPrice}`;
  } else if (track.collectionPrice && track.collectionPrice > 0) {
    price = `$${track.collectionPrice}`;
  }

  const handlePlayClick = () => {
    if (track.previewUrl) {
      onPlay(track); 
    } else {
      alert("Preview tidak tersedia untuk lagu ini.");
    }
  };

  const handleAddClick = () => {
    onAddToPlaylist(track);
  };

  const isPlaying = (playingTrackId === track.trackId);

  return (
    <div className="song-card">
      <img src={artwork} alt={title} className="song-card-artwork" />
      <div className="song-card-info">
        <div className="song-card-title" title={title}>{title}</div>
        <div className="song-card-artist" title={artist}>{artist}</div>
        <div className="song-card-price">{price}</div>
      </div>
      <div className="song-card-actions">
        <button className="song-card-btn" title={isPlaying ? "Pause" : "Play"} onClick={handlePlayClick}>
          
          {isPlaying ? (
            // Ikon Pause (SVG)
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M 3 1 C 2.4477153 1 2 1.4477153 2 2 L 2 14 C 2 14.552285 2.4477153 15 3 15 L 6 15 C 6.5522847 15 7 14.552285 7 14 L 7 2 C 7 1.4477153 6.5522847 1 6 1 L 3 1 z M 10 1 C 9.4477153 1 9 1.4477153 9 2 L 9 14 C 9 14.552285 9.4477153 15 10 15 L 13 15 C 13.552285 15 14 14.552285 14 14 L 14 2 C 14 1.4477153 13.552285 1 13 1 L 10 1 z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1.71399C3 1.05216 3.73117 0.624731 4.30154 0.957917L13.6985 6.24401C14.267 6.57606 14.267 7.42394 13.6985 7.75599L4.30154 13.0421C3.73117 13.3753 3 12.9478 3 12.286V1.71399Z"/>
            </svg>
          )}
        </button>
        <button className="song-card-btn" title="Tambah ke Playlist" onClick={handleAddClick}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1C8.26522 1 8.51957 1.10536 8.70711 1.29289C8.89464 1.48043 9 1.73478 9 2V7H14C14.2652 7 14.5196 7.10536 14.7071 7.29289C14.8946 7.48043 15 7.73478 15 8C15 8.26522 14.8946 8.51957 14.7071 8.70711C14.5196 8.89464 14.2652 9 14 9H9V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V9H2C1.73478 9 1.48043 8.89464 1.29289 8.70711C1.10536 8.51957 1 8.26522 1 8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7H7V2C7 1.73478 7.10536 1.48043 7.29289 1.29289C7.48043 1.10536 7.73478 1 8 1Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function ResultsDisplay({ results, onPlay, onAddToPlaylist, playingTrackId }) {
  return (
    <section className="results-container">
      <h3 className="text-light mb-3">Hasil Pencarian</h3> 
      
      <div className="results-grid-container">
        {results.map((item) => (
          <SongCard 
            key={item.trackId || item.collectionId} 
            track={item} 
            onPlay={onPlay}
            onAddToPlaylist={onAddToPlaylist}
            playingTrackId={playingTrackId}
          />
        ))}
      </div>
    </section>
  );
}

export default ResultsDisplay;