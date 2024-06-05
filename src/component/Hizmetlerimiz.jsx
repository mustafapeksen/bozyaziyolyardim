import React from "react";
import HizmetlerContent from "./HizmetlerContent";

function Hizmetlerimiz() {
    const hizmetler = [{
        name: "Oto Kurtarma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/oto-kurtarma.webp"
    }, {
        name: "Yol Yardım",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/yol-yardim.webp"
    }, {
        name: "Oto Çekici",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/oto-cekici.webp"
    }, {
        name: "Tekli Araç Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/tekli-arac-tasima.webp"
    }, {
        name: "Çoklu Araç Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/coklu-arac-tasima.webp"
    }, {
        name: "Sıfır Araç Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/sifir-arac-tasima.webp"
    }, {
        name: "Şehirler Arası Araç Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/sehirler-arasi-arac-tasima.webp"
    }, {
        name: "İş Makinası Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/is-makinasi-tasima.webp"
    }, {
        name: "Traktör Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/traktor-tasima.webp"
    }, {
        name: "Minibüs Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/minibus-tasima.webp"
    }, {
        name: "Kamyonet Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/kamyon-tasima.webp"
    }, {
        name: "Hasarlı Araç Taşıma",
        src: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/hasarli-arac-tasima.webp"
    }];

    return (
        <div>
            <div className="title">
                <h1>Hizmetlerimiz</h1>
            </div>
            <div id="grid-content" className="hizmetler-grid-container">
                {hizmetler.map((hizmet, index) => (
                    <HizmetlerContent key={index} src={hizmet.src} name={hizmet.name} id={index} />
                ))}
            </div>

        </div>
    );
}

export default Hizmetlerimiz;