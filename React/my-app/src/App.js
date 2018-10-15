import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BodyContent from './components/BodyContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BodyContent />   
        <Footer /> 
      </div>
    );
  }
}

export default App;
