import React from 'react';
import './Portfolio.css'

const PortfolioItems = () => (
  <div className="container-fluid">
    <p className="projectTextTop">Recorded demos of two projects I've built:
    </p>
    <div className="row">
      <div className="col-sm-4 col-md-4">
          <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item"
              src="https://www.youtube.com/embed/l4p_20Sdq30"
              title="movie"
              allowFullScreen>
            </iframe>
          </div>
      </div>
    <div className="col-sm-4 col-md-4">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item"
          src="https://www.youtube.com/embed/X64UU8z7K8c"
          title="movie"
          allowFullScreen>
        </iframe>
      </div>
    </div>
    </div>
    <div className="row">
      <div className="col-sm-4 col-md-4">
        <p>
          This is a React/Redux App with a Firebase backend.  You're able to login/register and dynamically build a sandwich.  This App has a modal, an order form, routing, a spinner and holds persistant state.<br />Github: <a href='https://github.com/dragomir1/REACT-sandwichBuilder' rel="noopener noreferrer" target='_blank'>Project Link</a>
        </p>
      </div>
      <div className="col-sm-4 col-md-4">
        <p>
          This is a full Stack M.E.R.N. App with a MongoDB backend. You can login/register, create, edit, and delete your profile page.  This App also makes calls to the github API, fetches your projects and adds them to your profile.<br />Github: <a href='https://github.com/dragomir1/FullStack-MERN-project' rel="noopener noreferrer" target='_blank'>Project Link</a>
        </p>
      </div>
    </div>
    <p className="projectText"><span className="first-character1">I'm currently working on</span>a hotel reservation APP with GraphQL for the IPhone. This APP will allow you log in/register, find a hotel, make a reservation and perform CRUD operations on it.  {' '}Also, working on a <em>contract</em>{' '}to build a car maintenance MVP for the IPhone using Firebase as a back end.{' '}This will be limited since it's an MVP but will have features accustomed to mobile Apps such as a Splash screen, log in/reg and a dashboard.  The dashboard will have features of its own.  Both APPs are being built in React Native.</p>
  </div>
)

export default PortfolioItems;
