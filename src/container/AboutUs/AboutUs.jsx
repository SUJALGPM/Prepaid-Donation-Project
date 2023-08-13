import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    
    <div className='app__aboutus-overlay flex__center '>
      <img src={images.G} alt='letter backside' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <p className='p__opensans'>The aim of your charity project is to provide financial assistance to individuals who need funding to start or expand their small businesses. Additionally, you want to ensure that the donors' contributions have a meaningful impact.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.charity} alt='aboutplant' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <p className='p__opensans'>Since its establishment in January 2023, our organization has experienced remarkable growth, establishing strong partnerships with multiple colleges and charity organizations. We have successfully extended our reach, providing invaluable support and assistance to a diverse range of individuals in need.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
