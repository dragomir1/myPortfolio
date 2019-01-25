import React from 'react';
import './MainPage.css';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../SkillSets/SkillSets';
import About from '../About/About';

const MainPage = () => {
  return (
    <div>
        <div id="parallax-world-of-ugg">
            <section>
              <div className="title">
                <h3>Michael Dragomir</h3>
                <p className="line-break2 margin-top-10"></p>
                <h1>Front End / Full Stack - M.E.R.N - React - React Native</h1>
              </div>
            </section>
            <section>
                <div className="parallax-one">
                  <h2>ABOUT</h2>
                </div>
            </section>
            <section>
              <div className="block">
              <div className="embed-responsive embed-responsive-4by3">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/MCgYZ7eEGs8" title="movie" allowFullScreen></iframe>
              </div>
                <p className="line-break margin-top-10"></p>
                <About />
              </div>
            </section>
            <section>
              <div className="parallax-two">
                <h2>PROJECTS</h2>
              </div>
            </section>
            <section>
              <div className="block">
              <Portfolio />
              </div>
            </section>
            <section>
              <div className="parallax-three">
                <h2>SKILLS</h2>
              </div>
            </section>
            <section>
              <div className="block">
              <Skills />
            </div>
          </section>
          <section>
            <div className="parallax-four">
              <h2>CONTACT</h2>
            </div>
          </section>
          <section>
            <div className="block">
              <Contact />
            </div>
          </section>
        </div>
      </div>
  )
}


export default MainPage;
