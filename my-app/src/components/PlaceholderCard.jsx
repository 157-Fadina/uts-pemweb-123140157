import React from 'react';

// Ganti nama fungsi ini
function PlaceholderCard() {
  return (
    <div className="song-card skeleton">
      {/* ... (kode skeleton-box Anda tetap sama) ... */}
      <div className="song-card-artwork skeleton-box"></div>
      
      <div className="song-card-info">
        <div className="skeleton-line" style={{ width: '80%' }}></div>
        <div className="skeleton-line" style={{ width: '60%' }}></div>
        <div className="skeleton-line" style={{ width: '30%', marginTop: '10px' }}></div>
      </div>
      
      <div className="song-card-actions">
        <div className="skeleton-box skeleton-btn"></div>
        <div className="skeleton-box skeleton-btn"></div>
      </div>
    </div>
  );
}

// Ganti nama export ini
export default PlaceholderCard;