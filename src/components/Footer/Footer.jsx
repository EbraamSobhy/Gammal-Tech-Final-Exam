import React from "react";
import './footer.css';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


function Footer() {
    return (
        <div>
            <footer className="footer">
                <p className="name">Gammal.Tech</p>
                <div className="social-media-icons">
                    <a href="https://www.facebook.com/gammal.tech/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://wa.me/+201033998844" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/gammal.tech/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@gammal.tech" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                    <a href="https://www.linkedin.com/company/gammal-tech/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.youtube.com/c/GammalTech" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </div>
                <p className="copyright">&copy;2024 Gammal.Tech All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;
