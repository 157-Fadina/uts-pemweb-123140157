import React from 'react';
// 1. Ganti import ini
import PlaceholderCard from './PlaceholderCard.jsx';

// 2. Ganti nama fungsi ini
function LoadingGrid() {
  const skeletonCount = Array(8).fill(0);

  return (
    <section className="results-container">
      <h3 className="text-light mb-3">Mencari...</h3>
      
      <div className="results-grid-container">
        {skeletonCount.map((_, index) => (
          // 3. Ganti nama komponen ini
          <PlaceholderCard key={index} />
        ))}
      </div>
    </section>
  );
}

// 4. Ganti nama export ini
export default LoadingGrid;