import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

function Iletisim() {
    function clickHandle(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.issue.value
        const body = event.target.message.value
        const emailInformation = `email= ${email} name=${name} subject=${body} `

        const mailtoLink = `mailto:mustafapeksen04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailInformation)}`;

        window.location.href = mailtoLink;
    }
    return <div>
        <h1>İletişim</h1>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25787.81936649373!2d32.9585398863807!3d36.106224909721334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc1927a17fc313%3A0x2df31e1a2288e5e8!2sBozyaz%C4%B1%2C%20Mersin!5e0!3m2!1str!2str!4v1716981761442!5m2!1str!2str"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="content-section">
            <div className="contact"><h2>İletişim Formu</h2>
                <form onSubmit={clickHandle} className="contact-form">
                    <input type="text" name="name" id="name" placeholder="Adınız" />
                    <input type="email" name="email" id="email" placeholder="E-Mailiniz" />
                    <input type="text" name="issue" id="issue" placeholder="Konunuz" />
                    <textarea name="message" id="message" placeholder="Mesajınız"></textarea>
                    <button >Send</button>
                </form>
            </div>
            <div className="information">
                <p>{<LocationOnIcon />} Adres: Bozyazı, Anamur / Mersin</p>
                <p>{<PhoneIcon />} Telefon: 0532 177 85 86 – 0536 928 45 99</p>
                <p>{<LanguageIcon />} Web:  bozyaziyolyardim.com.tr</p>
            </div>
        </div>
    </div>
}

export default Iletisim;