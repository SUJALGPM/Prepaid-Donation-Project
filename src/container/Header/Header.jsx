import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import Typewriter1 from '../Animation/Typewriter1';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div className='app__header app__wrapper section__padding' id='home'>

      <div className='app__wrapper_info'>
        <SubHeading title="Every donation matters greatly." />
        <h1 className='app__header-h1'>
          <Typewriter1 text={"No one has ever become poor by giving."} />
        </h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>The value of life is not in its duration, but in its donation. You are not important because of how long you live, you are important because of how effective you live.</p>
        <button type='button' className='custom__button' style={{ fontWeight: "bold" }}><NavLink to="/donate">GET STARTED</NavLink></button>
      </div>

      <div className='app__wrapper_img'>
        <img className="photo" src={images.poor} alt='header_img' />
      </div>

    </div>
  );
};


export default Header;
