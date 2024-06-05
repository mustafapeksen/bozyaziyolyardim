import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// Footer component to display contact information and social media links
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div id="footer-id">
                    <h3>İletişim Bilgilerimiz</h3>
                    <ul id="footer-ul">
                        <li>
                            {/* Display the location icon and address */}
                            <span><LocationOnIcon /></span> Bozyazı, Anamur / Mersin
                        </li>
                        <li>
                            {/* Display the phone icon and contact numbers */}
                            <span><LocalPhoneIcon /></span> 0532 177 85 86 - 0536 928 45 99
                        </li>
                    </ul>
                    <div id="social-media">
                        {/* Social media icons with links */}
                        <a href="/"><FacebookIcon /></a>
                        <a href="/">< XIcon /></a>
                        <a href="/"><YouTubeIcon /></a>
                        <a href="/"><InstagramIcon /></a>
                    </div>
                </div>
            </div>
            <div>
                <div className="footer-end">
                    {/* Links to personal website and company website */}
                    <a href="https://mustafapeksen.github.io/personal-website/">Mustafa Pekşen © {new Date().getFullYear()}</a>
                    <a href="https://bozyaziyolyardim.com.tr">Bozyazı Yol Yardım</a>
                </div>
                <div id="phone-connect">
                    {/* WhatsApp and phone call links */}
                    <a className="whatsapp" aria-label="Chat on WhatsApp" href="https://wa.me/+12345">
                        <img className="whatsapp" alt="Chat on WhatsApp" src="/images/WhatsAppButtonGreenLarge.svg" />
                    </a>
                    <a className="cellphone" href="tel:+12345">
                        <img className="cellphone" src="/images/PhoneCall.png" alt="Phone on Telephone" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
