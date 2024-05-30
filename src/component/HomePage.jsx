import React from "react";
import Hizmetlerimiz from "./Hizmetlerimiz";
import Blog from "./Blog";

function HomePage() {

    function locationBozyazi() {
        window.location.href = 'https://maps.app.goo.gl/atJ3rsPraB4xMebK6'
    }

    return (
        <div className="home-page">
            <div className="title-section">
                <h1>Bozyazı Yol Yardım</h1>
                <p>
                    Araçların gün boyu yolda yaşayacağı her türlü teknik sorunun çözümü için yardıma hazır bulunan yol yardım hizmetimiz, sahada aktif olarak görev yapan personelimiz nezaretinde devam etmektedir.
                </p>
                <button onClick={locationBozyazi} type="button">
                    Bozyazı Yol Yardım
                </button>
            </div>
            <Hizmetlerimiz />
            <div className="hizmetler-features">
                <h2>Bozyazı Yol Yardım Hizmetleri</h2>
                <p>Bozyazı yol yardım firması, sunmuş olduğu tüm yol destek yardımlarını birer kamu hizmeti anlayışı ile gerçekleştirmektedir.</p>
                <div className="features">
                    <div className="features">
                        <h3>Bozyazı Oto Kurtarma </h3>
                        <p>Oto kurtarma personelimiz ilgili araç kurtarma talebinizden sonra yola çıkarak aracınızı olabilecek en kısa sürede bulunduğu yerden kurtarmaktadır.</p>
                    </div>
                    <div className="features">
                        <h3>Bozyazı Yol Yardım</h3>
                        <p>Bozyazı ve yakınındaki mevkilerden birinde, yolda kalmış ve destek hizmeti bekleyen tüm araçların yardımına, belirli bir plan ve program dahilinde yetişmeye gayret ediyoruz.</p>
                    </div>
                    <div className="features">
                        <h3>Bozyazı Oto Çekici</h3>
                        <p>Oto çekici hizmetimize başlamadan önce çekilecek aracın marka ve modelini tespit ederiz. Sonrasında da hizmete en uygun aracı hazırlayarak bölgeye sevk ederiz.</p>
                    </div>
                    <img src="https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/hakkimizda.webp" alt="bozyazi yol yardim" />
                </div>
                <div className="phone-section">
                    <h2>0532 177 85 86</h2>
                    <img src="telefon simgesi" alt="telefon simgesi" />
                </div>
                <div id="bozyazi-yol-yardim-hizmet">
                    <h2>Bozyazı Yol Yardım Hizmetleri</h2>
                    <p>Bozyazı yol yardım hizmetimizi, tüm ihtiyaç sahibi araçlara ulaştırabilmenin çabası ve gayreti içindeyiz. Hizmet kalitemizi her geçen sene daha da arttırarak geliştirmek, en büyük hedefimizdir.</p>
                </div>
                <Blog />
            </div>
        </div >);
}

export default HomePage;