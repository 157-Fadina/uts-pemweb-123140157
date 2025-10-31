import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './hero.css';
import img1 from "/src/assets/music-hero-1.jpg";
import img2 from "/src/assets/music-hero-2.png";
import img3 from "/src/assets/music-hero-3.jpg";

function HeroCarousel() {
  return (
    <Carousel fade controls={false} indicators={false} className="hero-carousel">
      <Carousel.Item>
        <div className="carousel-background" style={{ backgroundImage: `url(${img1})` }}></div>
        <Carousel.Caption className="hero-carousel-caption">
          <h1 className="display-4">Temukan Musik Baru.</h1>
          <p className="lead">Jelajahi jutaan lagu dari berbagai genre.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-background" style={{ backgroundImage: `url(${img2})` }}></div>
        <Carousel.Caption className="hero-carousel-caption">
          <h1 className="display-4">Lacak Perjalanan Musik Anda.</h1>
          <p className="lead">Catat setiap lagu dan album yang Anda dengarkan.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-background" style={{ backgroundImage: `url(${img3})` }}></div>
        <Carousel.Caption className="hero-carousel-caption">
          <h1 className="display-4">Bagikan Selera Musik Anda.</h1>
          <p className="lead">Terhubung dengan teman dan lihat apa yang mereka dengarkan.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;