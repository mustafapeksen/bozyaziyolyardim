import React from "react";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';


function PhotoGallery() {
    return (<Gallery>
        <Item original="/image/cekici.webp" thumbnail="/image/cekici.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/image/cekici.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/image/cekiciyol.webp" thumbnail="/image/cekiciyol.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/image/cekiciyol.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/image/kurtarmaotocekici.webp" thumbnail="/image/kurtarmaotocekici.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/image/kurtarmaotocekici.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/image/kurtarmayol.webp" thumbnail="/image/kurtarmayol.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/image/kurtarmayol.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/image/yol-kurtarma.webp" thumbnail="/image/yol-kurtarma.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/image/yol-kurtarma.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/image/yolyardim.webp" thumbnail="/image/yolyardim.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/image/yolyardim.webp" alt="Resim Açıklaması" />
            )}
        </Item>
    </Gallery>);
}

export default PhotoGallery;