import React from "react";

import './FooterStyling.css'

import linkedinLogo from "../resources/linkedin.png"
import instagramLogo from "../resources/instagram.png"
import tiktokLogo from "../resources/tiktok.png"

function Footer()
{
    return (
        <div className="Footer">
            <a href="https://www.linkedin.com/in/kaylea-gray-7277a21b6/" target="_blank" rel="noreferrer"><img className="logo_medium" src={linkedinLogo} alt="Kaylea Gray Linkedin"/></a>
            <a href="https://www.instagram.com/misskayleareads/" target="_blank" rel="noreferrer"><img className="logo_small" src={instagramLogo} alt="Miss Kaylea Reads Instagram"/></a>
            <a href="https://vm.tiktok.com/TTPdMJ4mPS" target="_blank" rel="noreferrer"><img className="logo_small" src={tiktokLogo} alt="Miss Kaylea Reads BookTok"/></a>
        </div>
    );
}

export default Footer;