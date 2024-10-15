import React from 'react';

import './ContactForm.css';

const ContactForm = () => {

  return (
    <div>
        <form>
            <div className='app__contactUs-contact_form'>
              <div>
                <label htmlFor="name" className="form-label p__opensans">Name</label>
                <input id="name" type="text" name="name" placeholder="Your Name here..." className="custom__input" required />
              </div>

              <div>
                <label htmlFor="email" className="form-label p__opensans">Email Address</label>
                <input id="email" type="email" name="email" placeholder="Your email here..." className="custom__input" required />
              </div>

              <div>
                <label htmlFor="phone" className="form-label p__opensans">Phone</label>
                <input id="phone" type="phone" name="phone" placeholder="Your phone number here..." className="custom__input" required />
              </div>

              <div>
                <label htmlFor="message" className="form-label p__opensans">Message</label>
                <textarea id="message" name="message" rows={4} placeholder='your message here...' className="custom__input" required />
              </div>

              <button type='submit' className='btn' >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm
