import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.C} alt="C letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cursive">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Welcome to Fortress Restaurant,
        a refined destination where the essence of fine dining meets modern elegance. Fortress stands as a beacon of culinary mastery, blending international flavors with a touch of African soul. Our name, Fortress, symbolizes strength, sophistication, and a steadfast commitment to providing an unparalleled dining experience.
        <div />
        At Fortress Restaurant, we offer more than just a meal; we create unforgettable moments of culinary artistry, surrounded by an atmosphere of warmth and charm. Our expertly crafted menu reflects a harmony of contemporary techniques and timeless flavors, designed to satisfy those who seek luxury and taste in every bite. Indulge in a journey of exquisite cuisine, where every detail is tailored to perfection.</p>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cursive">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>The story of Fortress Restaurant is one of passion, partnership, and a shared vision for excellence. It began with Mr. Maphanga, a visionary whose dedication to fine dining and culinary artistry laid the foundation for what would become a landmark in the gastronomic world. Alongside him was his wife, Mrs. Maphanga, whose love for hospitality and attention to detail added warmth and charm to the heart of Fortress. 
        <div />
        Together, they dreamed of creating a place where strength, elegance, and exquisite cuisine could unite in perfect harmony. With a team of world-class chefs and culinary innovators, Mr. and Mrs. Maphanga set out to build Fortress Restaurant—a sanctuary where every dish tells a story of craftsmanship and heritage. 
        </p> 
       
      </div>
    </div>
  </div>
);

export default AboutUs;
