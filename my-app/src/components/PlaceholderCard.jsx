import React from 'react';

function PlaceholderCard() {
  return (
    <div className="song-card skeleton">
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

export default PlaceholderCard;