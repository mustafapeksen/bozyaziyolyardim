import React from "react";
import 'photoswipe/dist/photoswipe.css'; // Import CSS for PhotoSwipe
import { Gallery, Item } from 'react-photoswipe-gallery'; // Import Gallery and Item components from react-photoswipe-gallery

// Component to display a photo gallery
function PhotoGallery() {
    return (
        <Gallery>
            {/* Each Item component represents a photo in the gallery */}
            {/* Provide original, thumbnail, width, and height props to each Item */}
            <Item original="/image/cekici.webp" thumbnail="/image/cekici.webp" width="1024" height="768">
                {/* Render the image and set up the onClick event to open the image in full screen */}
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="/image/cekici.webp" alt="Image Description" />
                )}
            </Item>
            {/* Repeat the same structure for each image */}
            <Item original="/image/cekiciyol.webp" thumbnail="/image/cekiciyol.webp" width="1024" height="768">
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="/image/cekiciyol.webp" alt="Image Description" />
                )}
            </Item>
            <Item original="/image/kurtarmaotocekici.webp" thumbnail="/image/kurtarmaotocekici.webp" width="1024" height="768">
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="/image/kurtarmaotocekici.webp" alt="Image Description" />
                )}
            </Item>
            <Item original="/image/kurtarmayol.webp" thumbnail="/image/kurtarmayol.webp" width="1024" height="768">
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="/image/kurtarmayol.webp" alt="Image Description" />
                )}
            </Item>
            <Item original="/image/yol-kurtarma.webp" thumbnail="/image/yol-kurtarma.webp" width="1024" height="768">
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="/image/yol-kurtarma.webp" alt="Image Description" />
                )}
            </Item>
            <Item original="/image/yolyardim.webp" thumbnail="/image/yolyardim.webp" width="1024" height="768">
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="/image/yolyardim.webp" alt="Image Description" />
                )}
            </Item>
        </Gallery>
    );
}

export default PhotoGallery;
