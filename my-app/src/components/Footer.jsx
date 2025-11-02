import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <p className="text-muted">
          © {new Date().getFullYear()} VoxFinder. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;