import React from 'react';
import {Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
//import { images } from '../../constants';
import './Footer.css'

const Footer = () => (
  <div className='app__footer section__padding app__bg'>

    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>49, Ali Yavar Jung Marg, Kherwadi, Bandra East, Mumbai, Maharashtra 400051</p>
        <p className='p__opensans'>+91 7798802841</p>
        <p className='p__opensans'>+91 8850443102</p>
      </div>

      <div className='app__footer-links_logo'>
        <h2 className="headtext__cormorant">DONATION</h2>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>12:00 pm -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 pm -08:00 am</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>@ 2023 DonationCamp. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
