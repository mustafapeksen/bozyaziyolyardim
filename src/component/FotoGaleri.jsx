import React from "react";
import PhotoGallery from "./PhotoGallery";

function FotoGaleri() {

    return (
        <div>
            <div className="title">
                <h1>Foto Galeri</h1>
            </div>
            <div className="photo-gallery" id="image">
                <PhotoGallery />
            </div>
        </div>)
}

export default FotoGaleri;