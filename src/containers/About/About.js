import React from 'react';
import './About.css';
import image from '../../assets/images/me.jpg';

const About = () => (
  <div className='bio-text'>
    <span className='first-character'>
      <img src={image} alt='me' className='img-thumbnail' />
    </span>
    I'm a software developer based in Los Angeles, California. I work hard every
    day at being a better version of myself both personally and professionally.
    Coding, working on algorithms, debugging or planning the stages of a new app
    challenges my brain the way it likes being challenged. I enjoy engaging with
    projects that require me to work outside of my comfort and knowledge set as
    continuing to learn new technologies, enhancing my current skill sets and
    development techniques are very important to me. I value depth, purpose and
    enjoy connecting with people. I hold dual citizenships and two passports in
    the European Union and the United States.
    <br />
    <div className='medialinks'>
      <i className='fab fa-github' />
      <a
        href='https://github.com/dragomir1'
        rel='noopener noreferrer'
        target='_blank'
      >
        {' '}
        GitHub
      </a>{' '}
      <i className='fab fa-linkedin icon' />
      <a
        href='https://www.linkedin.com/in/michaeldragomir'
        rel='noopener noreferrer'
        target='_blank'
      >
        {' '}
        LinkedIn
      </a>
    </div>
  </div>
);

export default About;
