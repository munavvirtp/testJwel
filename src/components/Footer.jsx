import React from 'react'
import './Footer.css'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import one from "../Images/Glogo.png"

function Footer() {
  return (
    <div className='footer'>
      <div>
{/*         <h3 className='headfooter'>NEWSLETTER</h3> */}
{/*         <h4 className='befooter'>Be the first to know more about <br /> */}
{/*           exciting new designs, Store Openings, <br /> */}
{/*           and much more. */}
{/*         </h4> */}
        <div className="lowerfooter">
          <img className="glogo" src={one} alt="" />
          <h4>FOLLOW US</h4>
          <div className="icons">
            <ImFacebook2 className='icnfooter' />
            <FaInstagram className='icnfooter' />
            <PiTiktokLogoLight className='icnfooter' />
            <FiYoutube className='icnfooter' />
            <FaLinkedin className='icnfooter' />
            <FaPinterest className='icnfooter' />
            <FaWhatsapp className='icnfooter' />
          </div>
        </div>

      </div>


      <ul className='footerlist'>
        <li>
          <h3>Arabian Gold & Diamonds</h3>
        </li>
        <li>  Stores</li>
        <li>  Blogs</li>
        <li>  Press Reviews</li>
        <li>  Corporate & Business Gifting</li>
        <li>  Wholesale</li>
        <li>  Customer Reviews</li>
        <li>  Privacy Policy</li>
        <li>  Terms & Conditions</li>
      </ul>


      <ul className='footerlist'>
        <li>
          <h3>CUSTOMER SERVICE</h3>
        </li>
        <li>  About Us</li>
        <li>  Contact Us</li>
        <li>  Gift Cards</li>
        <li>  Delivery & Returns</li>
        <li>  Customized Pieces</li>
        <li>  Product Care</li>
        <li>  Sizing Guide</li>
      </ul>

    </div>
  )
}

export default Footer