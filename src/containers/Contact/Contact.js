import React from 'react';
import './Contact.css';

const contactForm = () => (
  <div className='container'>
    <div className='row'>
      <form
        action='https://formspree.io/michaeldragomir@mac.com'
        method='POST'
        id='contact-form'
        className='contact-form'
        novalidate
      >
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='name'
                autoComplete='off'
                id='Name'
                placeholder='Your name'
                required
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                name='_replyto'
                autoComplete='off'
                id='email'
                placeholder='Your e-mail'
                required
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='form-group'>
              <textarea
                className='form-control textarea'
                rows='3'
                name='Message'
                id='Message'
                placeholder='Communicate with purpose:)'
                required
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button type='submit' className='btn main-btn pull-right'>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default contactForm;
