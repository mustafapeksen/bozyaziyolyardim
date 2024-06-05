import React from "react";
import Hizmetlerimiz from "./Hizmetlerimiz";
import Blog from "./Blog";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function HomePage() {

    function locationBozyazi() {
        window.location.href = 'https://maps.app.goo.gl/atJ3rsPraB4xMebK6'
    }

    return (
        <div className="home-page">
            <div className="title-section">
                <div className="title-card">
                    <h1>Bozyazı Yol Yardım</h1>
                    <p>
                        Araçların gün boyu yolda yaşayacağı her türlü teknik sorunun çözümü için yardıma hazır bulunan yol yardım hizmetimiz, sahada aktif olarak görev yapan personelimiz nezaretinde devam etmektedir.
                    </p>
                    <button onClick={locationBozyazi} type="button">
                        Bozyazı Yol Yardım
                    </button>
                </div>
            </div>
            <Hizmetlerimiz />
            <div className="hizmetler-features">
                <div className="features-section">
                    <div id="features-container">
                        <div className="features">
                            <h2>Bozyazı Yol Yardım Hizmetleri</h2>
                            <p>Bozyazı yol yardım firması, sunmuş olduğu tüm yol destek yardımlarını birer kamu hizmeti anlayışı ile gerçekleştirmektedir.</p>
                            <h3><CheckCircleOutlineIcon color="primary" /> Bozyazı Oto Kurtarma </h3>
                            <p>Oto kurtarma personelimiz ilgili araç kurtarma talebinizden sonra yola çıkarak aracınızı olabilecek en kısa sürede bulunduğu yerden kurtarmaktadır.</p>
                        </div>
                        <div className="features">
                            <h3><CheckCircleOutlineIcon color="primary" /> Bozyazı Yol Yardım</h3>
                            <p>Bozyazı ve yakınındaki mevkilerden birinde, yolda kalmış ve destek hizmeti bekleyen tüm araçların yardımına, belirli bir plan ve program dahilinde yetişmeye gayret ediyoruz.</p>
                        </div>
                        <div className="features">
                            <h3><CheckCircleOutlineIcon color="primary" /> Bozyazı Oto Çekici</h3>
                            <p>Oto çekici hizmetimize başlamadan önce çekilecek aracın marka ve modelini tespit ederiz. Sonrasında da hizmete en uygun aracı hazırlayarak bölgeye sevk ederiz.</p>
                        </div>
                    </div>
                    <img id="features-img" src="https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/hakkimizda.webp" alt="bozyazi yol yardim" />
                </div>
            </div>
            <div className="phone-section">
                <a href="tel:+905316187998"><PhoneEnabledIcon color="primary" sx={{ fontSize: 85 }} /></a>
                <h2>0532 177 85 86</h2>
            </div>
            <div id="mid-title-section">
                <div id="mid-title-content-container">
                    <div id="mid-title-section-content">
                        <h2>Bozyazı Yol Yardım Hizmetleri</h2>
                        <p>Bozyazı yol yardım hizmetimizi, tüm ihtiyaç sahibi araçlara ulaştırabilmenin çabası ve gayreti içindeyiz. Hizmet kalitemizi her geçen sene daha da arttırarak geliştirmek, en büyük hedefimizdir.</p>
                        <button onClick={locationBozyazi} type="button">
                            Bozyazı Yol Yardım
                        </button>
                    </div>
                </div>
            </div>
            <Blog />
        </div >);
}

export default HomePage;