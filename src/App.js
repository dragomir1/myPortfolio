import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Layout/Navbar';
import MainPage from './containers/Layout/MainPage';
import Footer from './containers/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <MainPage />
          <Footer />
      </div>
    );
  }
}

export default App;
