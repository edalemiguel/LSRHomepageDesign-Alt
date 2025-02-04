import React from 'react';
import NSCLogo from '../Assets/NSCLogo.png';
import '../App.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="contact-us">
        <h4>Contact Us:</h4>
        <p>North Seattle College</p>
        <p>LSR Office - ED1841B, Education Building</p>
        {/* Email icon */}
        <a href="mailto:lsr@seattlecolleges.edu" className="email">
            <i className="fas fa-envelope"></i> 
        </a>
      </div>

      <div className="nsc-links">
        <a href="https://northseattle.edu/" target="_blank" rel="noopener noreferrer">
          <img src={NSCLogo} alt="NSC Mascott Logo"/>
        </a>
        <a href="https://northseattle.edu/campus-life/campus-events" target="_blank" rel="noopener noreferrer">NSC Event Calendar</a>
        <a href="https://artgallery.northseattle.edu/" target="_blank" rel="noopener noreferrer">NSC Art Gallery</a>
        <a href="https://seattlecollegian.com/" target="_blank" rel="noopener noreferrer">The Seattle Collegian</a>
        <a href="https://www.youtube.com/@experientialperformativein9950" target="_blank" rel="noopener noreferrer">EPIC YouTube Channel</a>
      </div>

      <div className="follow-us">
        <h4>Follow Us:</h4>
        <a href="https://www.tiktok.com/@lictonspringsreview" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i> {/* TikTok icon */}
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> {/* Instagram icon */}
        </a>
        <a href="https://lictonspringsreview.com/feed/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-rss"></i> {/* RSS feed icon */}
        </a>
      </div>

      <div className="footer-icons">
        {/* Buttons for the icons */}
        <button className="footer-icon" onClick={() => alert('This will direct to Archive Page')}>
          <i className="fas fa-archive"></i> 
        </button>
        <button className="footer-icon" onClick={() => alert('This will direct to Help Page')}>
          <i className="fas fa-question-circle"></i> 
        </button>
        <button className="footer-icon" onClick={() => alert('This will direct Home Page')}>
          <i className="fas fa-home"></i> 
        </button>
      </div>
    </footer>
  );
};

export default Footer;
