import React, { useState } from 'react';
import EarlyBloom from '../Assets/EarlyBloom.jpg';
import LanternInTheDark from '../Assets/LanternInTheDark.jpg';
import PoolBalls from '../Assets/PoolBalls.jpg';
import AFishWorld from '../Assets/AFishWorld.png';
import SoBeautiful from '../Assets/SoBeautiful.jpg';
import Bang from '../Assets/Bang.jpg';
import Moi from '../Assets/Moi.jpg';
import '../App.css';

const images = [
  { src: EarlyBloom, alt: "Early Bloom Painting", title: "Early Bloom", description: "A beautiful abstract painting.", author: "Artist Name", date: "January 10, 2025" },
  { src: LanternInTheDark, alt: "Lantern in the Dark Painting", title: "Lantern in the Dark", description: "A serene painting that evokes mystery.", author: "Artist Name", date: "February 15, 2025" },
  { src: PoolBalls, alt: "Pool Balls Painting", title: "Pool Balls", description: "A dynamic piece of art with vibrant colors.", author: "Artist Name", date: "March 3, 2025" },
  { src: AFishWorld, alt: "A Fish World", title: "A Fish World", description: "An underwater scene depicting a fish's world.", author: "Artist Name", date: "April 20, 2025" }, 
  { src: SoBeautiful, alt: "You Shone So Beautiful In That Dark Dreary Place", title: "You Shone So Beautiful", description: "A dark yet hopeful artistic piece.", author: "Artist Name", date: "May 5, 2025" },
  { src: Bang, alt: "A Picture of a Man Praying", title: "A Picture of a Man Praying", description: "A thought-provoking painting of spiritual connection.", author: "Artist Name", date: "June 10, 2025" },
  { src: Moi, alt: "A Digital Collage of a Woman's Portrait", title: "Moi", description: "A collage of portraits that expresses identity.", author: "Artist Name", date: "July 22, 2025" }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  const prevImages = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - imagesPerPage : prevIndex - imagesPerPage
    );
  };

  const nextImages = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerPage >= images.length ? 0 : prevIndex + imagesPerPage
    );
  };

  return (
    <section id="gallery" className="gallery">
      <button className="prev-btn" onClick={prevImages}>&#10094;</button>

      <div className="gallery-container">
        {images.slice(currentIndex, currentIndex + imagesPerPage).map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-image"/>
            <div className="blog-post-info">
              <h2 className="title">{image.title}</h2>
              <p className="description">{image.description}</p>
              <p className="author">By: {image.author}</p>
              <p className="date">{image.date}</p>
              <a href={`/post/${index}`} className="read-more-link">Read More</a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / imagesPerPage) ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * imagesPerPage)}  
          ></span>
        ))}
      </div>

      <button className="next-btn" onClick={nextImages}>&#10095;</button>
    </section>
  );
};

export default Gallery;
