import React from 'react';
import PlaceholderCard from './PlaceholderCard.jsx';

function LoadingGrid() {
  const skeletonCount = Array(8).fill(0);

  return (
    <section className="results-container">
      <h3 className="text-light mb-3">Mencari...</h3>
      
      <div className="results-grid-container">
        {skeletonCount.map((_, index) => (
          <PlaceholderCard key={index} />
        ))}
      </div>
    </section>
  );
}

export default LoadingGrid;