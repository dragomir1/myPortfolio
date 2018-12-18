import React from 'react';
import './Portfolio.css'

const PortfolioItems = () => (
  <div className="container-fluid">
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
          src="https://www.youtube.com/embed/iamIhzZ3aAI"
          title="movie"
          allowFullScreen>
        </iframe>
      </div>
    </div>
    <div className="col-sm-4 col-md-4">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item"
          src="https://www.youtube.com/embed/iamIhzZ3aAI"
          title="movie"
          allowFullScreen>
        </iframe>
      </div>
    </div>
    </div>
    <div className="row">
      <div className="col-sm-3 col-md-4">
        <p>
          This is a React/Redux App with a Firebase backend.  Log in/Register and dynamically build your tasty sandwich.  This App has a modal, an order form, routing, a spinner and persistant state. <br />Github: <a href='https://github.com/dragomir1/REACT-sandwichBuilder' rel="noopener noreferrer" target='_blank'>Project Link</a>
        </p>
      </div>
      <div className="col-sm-3 col-md-4">
        <p>
          description: This is my body of work. I am always working on something new and exciting.  all of these proects utiizing react, with a backend.<br />github: lnk
        </p>
      </div>
      <div className="col-sm-3 col-md-4">
        <p>
            description: This is my body of work. I am always working on something new and exciting.  all of these proects utiizing react, with a backend.<br />github: link
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4 col-md-4">
        <div className="embed-responsive embed-responsive-4by3">
          <iframe className="embed-responsive-item"
            src="https://www.youtube.com/embed/iamIhzZ3aAI"
            title="movie"
            allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="col-sm-4 col-md-4">
        <div className="embed-responsive embed-responsive-4by3">
          <iframe className="embed-responsive-item"
            src="https://www.youtube.com/embed/iamIhzZ3aAI"
            title="movie"
            allowFullScreen>
          </iframe>
      </div>
    </div>
    <div className="col-sm-4 col-md-4">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item"
          src="https://www.youtube.com/embed/iamIhzZ3aAI"
          title="movie"
          allowFullScreen>
        </iframe>
      </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3 col-md-4">
        <p>
        description: This is my body of work. I am always working on something new and exciting.  all of these proects utiizing react, with a backend.<br />github: link
        </p>
      </div>
      <div className="col-sm-3 col-md-4">
        <p>
          description: This is my body of work. I am always working on something new and exciting.  all of these proects utiizing react, with a backend.<br />github: link
        </p>
      </div>
      <div className="col-sm-3 col-md-4">
        <p>
          description: This is my body of work. I am always working on something new and exciting.  all of these proects utiizing react, with a backend.<br />github: link
        </p>
      </div>
    </div>
  </div>
)

export default PortfolioItems;
