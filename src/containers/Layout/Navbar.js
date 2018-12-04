import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="landing.html">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="register.html">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register.html">Skill Sets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
)
}

export default Navbar;
