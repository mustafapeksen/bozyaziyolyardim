import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer>
            <div id="footer-id">
                <h3>İletişim Bilgilerimiz</h3>
                <ul>
                    <li>
                        <span><LocationOnIcon /></span> Bozyazı, Anamur / Mersin
                    </li>
                    <li>
                        <span><LocalPhoneIcon /></span> 0532 177 85 86 - 0536 928 45 99
                    </li>
                </ul>
                <div id="social-media">
                    <a href="/"><FacebookIcon /></a>
                    <a href="/">< XIcon /></a>
                    <a href="/"><YouTubeIcon /></a>
                    <a href="/"><InstagramIcon /></a>
                </div>
            </div>
            <div>
                <a href="https://mustafapeksen.github.io/personal-website/">Mustafa Pekşen</a>
                <a href="https://bozyaziyolyardim.com.tr">Bozyazı Yol Yardım</a>
            </div>
            <div id="phone-connect">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/+905316187998">
                    <img alt="Chat on WhatsApp" src="/image/WhatsAppButtonGreenLarge.svg" />
                </a>
                <a href="tel:+905316187998"><img src="/image/PhoneCall.png" alt="Phone on Telephone" /></a>
            </div>
        </footer>);
}

export default Footer;