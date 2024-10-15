import React from 'react';
import { SubHeading } from '../../components';

import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='app__newsletter section__padding'>


      <SubHeading title='Subscribe' />

      <p className="p__opensans" style={{color: '#bbb', marginBottom: '2rem'}}>Subscribe to our newsletter for specials, events, and more delights.</p>
      
      <form id='subscription-form'>        
        <input id="email" type="email" name="email" placeholder="Your email here..."  className="custom__input" />
      
        <button type="submit" className="custom__button">Send</button>
      </form>

    </div>
)};

export default Newsletter;
