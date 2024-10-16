import React from 'react';
import { TablesMap, SubHeading } from '../../components';

import './Bookings.css';
import PayInfo from './Payments/PayInfo';

const Bookings = () => {

  return (
    <div className='app__bookings section__padding flex__center'>
      <SubHeading title={'Reserve a Table'} />

      <form className="app__bookings-reservations section__padding">

        <div className='app__bookings-reservations_book app__bg'>
          <div className="form-group">
            <label htmlFor="name" className="form-label p__opensans">Name</label>
            <input id="name" type="text" name="name" placeholder="Your Name here..." className="custom__input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label p__opensans">Email Address</label>
            <input id="email" type="email" name="email" placeholder="Your email here..." className="custom__input" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label p__opensans">Phone</label>
            <input id="phone" type="phone" name="phone" placeholder="Your phone number here..." className="custom__input" required />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label p__opensans">Message (Optional)</label>
            <textarea id="message" name="message" rows={4} placeholder='Special request, number of guests etc...' className="custom__input"></textarea>
          </div>

          <div className='form-group'>
            <label htmlFor="date" className="form-label p__opensans">Select Date</label>
            <input id='date' type='date' name='date' className='custom__input' required />
          </div>

          <div className='form-group'>
            <label htmlFor="time" className="form-label p__opensans">Select Time</label>
            <input id='time' type='time' name='time' className='custom__input' required />
          </div>
        </div>

        <div className='app__bookings-reservations_tablesMap app__bg'>
          <div className="form-group">
            <TablesMap />
            
            <PayInfo />

            <button className="btn" type='submit' >Reserve</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default Bookings
