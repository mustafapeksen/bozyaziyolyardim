import React from "react";
import PhotoGallery from "./PhotoGallery";

// FotoGaleri component to display a photo gallery
function FotoGaleri() {
    return (
        <div>
            {/* Title section */}
            <div className="title">
                <h1>Foto Galeri</h1>
            </div>
            {/* Photo gallery section */}
            <div className="photo-gallery" id="image">
                <PhotoGallery />
            </div>
        </div>
    );
}

export default FotoGaleri;
