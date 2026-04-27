import React, { useState } from 'react';
import '../styles/GlobalStyles.css';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setSelectedPhoto(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="photo-gallery reveal" id="photo-gallery">
      <div className="section-container">
        <h2>Photo Gallery</h2>
        <div className="photo-upload-container">
          <div className="upload-area">
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="photo-upload" className="upload-label">
              <div className="upload-content">
                <i className="fas fa-camera"></i>
                <p>Click to upload photo</p>
                <span>or drag and drop</span>
              </div>
            </label>
          </div>
          
          {selectedPhoto && (
            <div className="photo-preview">
              <img src={selectedPhoto} alt="Uploaded photo" />
              <button 
                className="remove-photo"
                onClick={() => setSelectedPhoto(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
