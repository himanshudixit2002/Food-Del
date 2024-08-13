import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="QuickBites Logo" className="footer-logo" />
            <p>QuickBites offers a diverse menu of tasty dishes delivered straight to your door. We’re dedicated to satisfying your cravings with every meal.</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/profile.php?id=61561418864275&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <img src={assets.facebook_icon} alt="Facebook" />
                </a>
                <a href="https://x.com/Dixit_himanshux?t=Qx4ZYfQIVem_ydVqN6LkMg&s=09" target="_blank" rel="noopener noreferrer">
                    <img src={assets.twitter_icon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/himanshudixit2406/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>7390922922</li>
                <li>himanshudixit2406@gmail.com</li>
            </ul>
                
            </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 ©Himanshu Dixit - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
