import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import "./footer.css"
const footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="row">
        <div class="footer-col">
                <h4 className='Q'>Quickk
                <div className='underline'><span></span></div>
                </h4>
                <p className='foot-para'>Welcome to Quickk, your premier destination for quick and convenient convenience product delivery. We understand the importance of time and convenience in today's fast-paced world, and that's why we've created a seamless platform that brings your favorite tobacco products right to your doorstep.</p>
            </div>
            <div class="footer-col">
                <h4>company
                <div className='underline'><span></span></div>
                </h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 className='follow'>follow us
                <div className='underline'><span></span></div>
                </h4>
                <div class="social-links">
                    <a href="#"><i class="fab"><FaFacebookF /></i></a>
                    <a href="#"><i class="fab"><FaLinkedinIn /></i></a>
                    <a href="#"><i class="fab"><BsTwitter/></i></a>
                    <a href="#"><i class="fab"><FiInstagram/></i></a>
                </div>
            </div>
        </div>
    </div>
    <hr className='hr' />
   <div className='rights'>
   <p>© 2023 All rights reserved. — Quickk.com</p>
   <p className='terms'>Terms and Conditions</p>
   </div>
</footer>




  )
}

export default footer
