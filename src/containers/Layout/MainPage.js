import React from 'react';
import './MainPage.css';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../SkillSets/SkillSets';
import About from '../About/About';
// import image from '../../assets/images/me.jpg';

const MainPage = () => {
  return (
    <div>
      <div id='parallax-world-of-ugg'>
        <section>
          <div className='title'>
            <h3>Michael Dragomir</h3>
            <p className='line-break2 margin-top-10' />
            <h1>
              Full Stack javaScript developer with a focus on React/React
              Native.
            </h1>
          </div>
        </section>
        <section>
          <div className='parallax-one'>
            <h2>ABOUT ME</h2>
          </div>
        </section>

        <section>
          <div className='block'>
            <About />
          </div>
        </section>
        <section>
          <div className='parallax-two'>
            <h2>PROJECTS</h2>
          </div>
        </section>
        <section>
          <div className='block'>
            <Portfolio />
          </div>
        </section>
        <section>
          <div className='parallax-three'>
            <h2>SKILLS</h2>
          </div>
        </section>
        <section>
          <div className='block'>
            <Skills />
          </div>
        </section>
        <section>
          <div className='parallax-four'>
            <h2>CONTACT</h2>
          </div>
        </section>
        <section>
          <div className='block'>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
