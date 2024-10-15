import React from 'react';
import { Link } from 'react-router-dom'; 

import './Header.css';
import { VacanciesPostsAtHome, SubHeading, SlidesAtHero } from '../../components';

import slides from '../../constants/CarouselDataAtHero'

const 
Header = () => (
  <div className="app__header section__padding">
    <VacanciesPostsAtHome />
    <div className="app__header-cont"  style={{marginTop: '2rem'}}>
      <div className="app__wrapper_info">
        <SubHeading title='Discover the Essence of Fine Dining' />
        <div className='header-content'>
          <h1 className='app__header-h1'>Harnessing Culinary Excellence</h1>
          <p className="p__opensans" id='main-p'>Embrace exquisite flavors and warmth, where every moment is a culinary delight—a sanctuary of charm and elegance.</p>
        </div>
        
        <button type='button' className='custom__button'><Link to='/reservation'>Make a Reservation</Link></button>
      </div>
      <div className="app__wrapper_img">
        <h3 className='app__wrapper_img-header'>Featured Dishes</h3>
        <SlidesAtHero className='app__wrapper_img-img' data={slides} />
      </div>
    </div>
    
  </div>
 
);

export default Header;
