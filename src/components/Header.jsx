import React from 'react';
import '../App.css'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img 
          src="https://lictonspringsreview.com/wp-content/uploads/2024/02/cropped-LSRLogo_wideweb.png" 
          alt="Licton Springs Review Logo"
        />
        <p className="tagline">
          Visual and literary art from the students, staff, faculty, and alumni of North Seattle College
        </p>
      </div>

      <div className="social-icons">
        <a href="https://www.tiktok.com/@lictonspringsreview" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i> {/* TikTok icon */}
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> {/* Instagram icon */}
        </a>
        <a href="https://lictonspringsreview.com/feed/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-rss"></i> {/* RSS feed icon */}
        </a>
        <input type="text" className="search-bar" placeholder="Search..." />

        <button className="menu-icon" onClick={() => alert('This will pull the Menu tab')}>
          <i className="fas fa-bars"></i> {/* Menu icon */}
        </button>
        <button className="home-icon" onClick={() => alert('This will direct to Home Page')}>
          <i className="fas fa-home"></i> {/* Home icon */}
        </button>
      </div>
    </header>
  );
};

export default Header;
