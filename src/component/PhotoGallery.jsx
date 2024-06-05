import React from "react";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';


function PhotoGallery() {
    return (<Gallery>
        <Item original="/images/cekici.webp" thumbnail="/images/cekici.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/cekici.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/images/cekiciyol.webp" thumbnail="/images/cekiciyol.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/cekiciyol.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/images/kurtarmaotocekici.webp" thumbnail="/images/kurtarmaotocekici.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/kurtarmaotocekici.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/images/kurtarmayol.webp" thumbnail="/images/kurtarmayol.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/kurtarmayol.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/images/yol-kurtarma.webp" thumbnail="/images/yol-kurtarma.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/yol-kurtarma.webp" alt="Resim Açıklaması" />
            )}
        </Item>
        <Item original="/images/yolyardim.webp" thumbnail="/images/yolyardim.webp" width="1024" height="768">
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/yolyardim.webp" alt="Resim Açıklaması" />
            )}
        </Item>
    </Gallery>);
}

export default PhotoGallery;