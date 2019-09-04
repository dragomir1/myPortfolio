import React from 'react';
import './Portfolio.css';

const PortfolioItems = () => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-sm-4 col-md-4'>
        <div className='embed-responsive embed-responsive-4by3'>
          <iframe
            className='embed-responsive-item'
            src='https://www.youtube.com/embed/l4p_20Sdq30'
            title='movie'
            allowFullScreen
          />
        </div>
      </div>
      <div className='col-sm-4 col-md-4'>
        <p>
          This is a React/Redux App with a Firebase backend. You're able to
          login/register and dynamically build a sandwich. This App has a modal,
          an order form, routing, a spinner and holds persistant state.
          <br />
          <a
            href='https://github.com/dragomir1/REACT-sandwichBuilder'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github Link
          </a>
        </p>
      </div>
      <div className='col-sm-4 col-md-4'>
        <div className='embed-responsive embed-responsive-4by3'>
          <iframe
            className='embed-responsive-item'
            src='https://www.youtube.com/embed/l4p_20Sdq30'
            title='movie'
            allowFullScreen
          />
        </div>
      </div>
      <div className='col-sm-4 col-md-4'>
        <p>
          This is a React/Redux App with a Firebase backend. You're able to
          login/register and dynamically build a sandwich. This App has a modal,
          an order form, routing, a spinner and holds persistant state.
          <br />
          <a
            href='https://github.com/dragomir1/REACT-sandwichBuilder'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github Link
          </a>
        </p>
      </div>
      <div className='col-sm-4 col-md-4'>
        <div className='embed-responsive embed-responsive-4by3'>
          <iframe
            className='embed-responsive-item'
            src='https://www.youtube.com/embed/X64UU8z7K8c'
            title='movie'
            allowFullScreen
          />
        </div>
      </div>
      <div className='col-sm-4 col-md-4'>
        <p>
          This is a full Stack M.E.R.N. App with a MongoDB backend. You can
          login/register, create, edit, and delete your profile page. This App
          also makes calls to the github API, fetches your projects and adds
          them to your profile.
          <br />
          <a
            href='https://github.com/dragomir1/FullStack-MERN-project'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github Link
          </a>
        </p>
      </div>
      <div className='col-sm-4 col-md-4'>
        <div className='embed-responsive embed-responsive-4by3'>
          <iframe
            className='embed-responsive-item'
            src='https://www.youtube.com/embed/NNt5FRPsk1A'
            title='movie'
            allowFullScreen
          />
        </div>
      </div>
      <div className='col-sm-4 col-md-4'>
        <p>
          This is a cross-platform car repair service MVP. I used Firebase as a
          backend, a managed build using Expo, Oauth2 for Google and Facebook,
          React Navigation, as well as the Twilio SMS messaging service API.
          <br />
          <a
            href='https://github.com/dragomir1/CarbonExpo'
            rel='noopener noreferrer'
            target='_blank'
          >
            Github Link
          </a>
        </p>
      </div>
    </div>
    <div className='row' />
    <p className='projectText'>
      <span className='first-character1'>
        Currently, I'm working on three new projects:
      </span>
      An idle game in React with Redux, a full stack React app with GraphQL, a
      cross-platform mobile app using React Native with Expo. I'm excited to
      work on these builds and will add them to my website when complete.
    </p>
  </div>
);

export default PortfolioItems;
