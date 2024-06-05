import React from "react";
import BlogCard from "./BlogCard";

function Blog() {
    const blogContents = [{
        title: "Bozyazı Nöbetçi Yol Yardım",
        text:
            "Bozyazı Nöbetçi Yol Yardım Aniden meydana gelen araç arızası ya da yol kazası sonucu yerinde teknik destek yardımı bekleyen araçlar için konusunda deneyimli personelimiz en kısa sürede yardım için yola çıkmaktadır.",
        img: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/nobetci-yol-yardim.webp"
    },
    {
        title: "Bozyazı Yol Yardım Firması",
        text:
            "Bozyazı Yol Yardım Firması Yol yardım ve yol destek paketlerimizi en uygun avantajlar ile güncelleyerek, araçlar için yolda kalma sorununu bir kabus olmaktan çıkarmayı amaçlıyoruz.",
        img: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/yol-yardim-firmasii.webp"
    }, {
        title: "Bozyazı Yol Yardım Fiyatları",
        text:
            "Bozyazı Yol Yardım Fiyatları Bozyazı yol yardım Fiyatları, tüm araç sahiplerinin bütçesi de göz önünde bulundurularak oluşturulmuştur. Abartılı ve gerçekçi olmayan hizmet fiyatlarını, firmamız çatısı altında bulamazsınız.",
        img: "https://bozyaziyolyardim.com.tr/wp-content/uploads/2023/09/yol-yardim-fiyatlari.webp"
    }];


    return (
        <div>
            <div className="title">
                <h1>Blog</h1>
            </div>
            <div className="blog-grid" id="blog-container">
                {blogContents.map((blogContent, index) => (
                    <BlogCard key={index} title={blogContent.title} text={blogContent.text} img={blogContent.img} />)
                )}
            </div>
        </div>)
}

export default Blog;