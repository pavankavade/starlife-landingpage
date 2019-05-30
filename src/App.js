import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Content from './components/content/Content';
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
