import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Discover a world of flavors all in one place. <br /> Our menu features a wide variety of ice cream options to suit every taste. From timeless favorites to innovative new creations, you’re sure to find something to delight your taste buds. Browse our selection and find the perfect treat to satisfy your cravings.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>00289200101</li>
                <li>contact@scoopdogg.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">&copy; 2024 Maryam Inam <br />All Rights Reserved</p>
    </div>
  )
}

export default Footer
