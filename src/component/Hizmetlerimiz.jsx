import React from "react";
import HizmetlerContent from "./HizmetlerContent";

// Hizmetlerimiz component to display services
function Hizmetlerimiz() {
    // Array of service objects with name and image source
    const hizmetler = [{
        name: "Car Recovery",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/oto-kurtarma.webp"
    }, {
        name: "Road Assistance",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/yol-yardim.webp"
    }, {
        name: "Car Towing",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/oto-cekici.webp"
    }, {
        name: "Single Vehicle Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/tekli-arac-tasima.webp"
    }, {
        name: "Multiple Vehicle Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/coklu-arac-tasima.webp"
    }, {
        name: "New Vehicle Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/sifir-arac-tasima.webp"
    }, {
        name: "Inter-City Vehicle Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/sehirler-arasi-arac-tasima.webp"
    }, {
        name: "Construction Equipment Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/is-makinasi-tasima.webp"
    }, {
        name: "Tractor Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/traktor-tasima.webp"
    }, {
        name: "Minibus Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/minibus-tasima.webp"
    }, {
        name: "Van Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/kamyon-tasima.webp"
    }, {
        name: "Damaged Vehicle Transport",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/hasarli-arac-tasima.webp"
    }];

    return (
        <div>
            {/* Title section */}
            <div className="title">
                <h1>Our Services</h1>
            </div>
            {/* Service grid container */}
            <div id="grid-content" className="hizmetler-grid-container">
                {/* Map through services and render HizmetlerContent component for each */}
                {hizmetler.map((hizmet, index) => (
                    <HizmetlerContent key={index} src={hizmet.src} name={hizmet.name} id={index} />
                ))}
            </div>
        </div>
    );
}

export default Hizmetlerimiz;
