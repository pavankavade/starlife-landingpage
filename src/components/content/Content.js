import React, { Component } from 'react'
import Section from '../section/Section';
import Services from './Services';
import About from '../content/About';
import Carousel1 from './Carousel';
import Contact from './Contact';
export default class Content extends Component {


  render() {

    //<div class="col-sm-6"></div>

    return (
      <div>


        <Carousel1 />
        <hr size="1"></hr>
        <div className="about">
          <Section
            title="About"
            subtitle={<About />}
            dark={true}
            id="about"
          />
        </div>
        <hr size="1"></hr>

        <Section
          title="Services"
          subtitle={<Services />}
          dark={true}
          id="services"
        />
        <hr size="1"></hr>
        <Section
          title="Contact"
          subtitle={<Contact />}
          dark={true}
          id="contact"
        />
        <hr size="1"></hr>


      </div>
    );
  }

}

