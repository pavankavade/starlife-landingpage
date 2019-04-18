import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Section from './components/content/Section';
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About"
          subtitle={dummyText}
          dark={true}
          id="about"
        />
        <Section
          title="Services"
          subtitle={dummyText}
          dark={true}
          id="services"
        />
        <Section
          title="Contact"
          subtitle={dummyText}
          dark={true}
          id="contact"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
