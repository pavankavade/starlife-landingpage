import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { Grid, Row, Col } from 'react-flexbox-grid';
import AdSense from 'react-adsense';
export default class Navbar extends Component {

  static defaultProps = {
    bottomBorderWidth: 2,
    headerHeight: 200,
    fadeInDistance: 40
  };

  constructor(props) {
    super(props);
    this.state = { navOpacity: 0 };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOpacity);
  }

  updateNavOpacity() {
    const navbarHeight = 50; // Bootstrap default
    const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
    const endFade = headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }


  render() {

    const Nav = (props) => {
      const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0;
      const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0;

      return (

        <div className="navbar navbar-default navbar-static-top" role="navigation" style={{ opacity, borderBottomWidth }}>
          <AdSense.Google
            client='ca-pub-4472628779003865'
            slot='5558303738'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
          />
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-id">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              <Link
                className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Starlife Furniture
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="nav-id">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link
                    className="navlink"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
              </Link></li>
                <li> <Link
                  className="navlink"

                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
              </Link></li>
                <li> <Link
                  className="navlink"

                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
              </Link></li>
              </ul>
            </div>
          </div>
        </div >
      );
    };

    const Header = (props) => (
      <div className="header" style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}>
        <div className="name">StarLife Furnitures</div>
        <div className="description">Kitchen Trolly and Stainless Steel Rail Work</div>
        <div className="links">

          <Link
            className="navlink"

            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
              </Link>
          <Link
            className="navlink"

            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
              </Link>
          <Link
            className="navlink"

            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
              </Link>
        </div>

      </div>
    );

    return (
      <div>
        <Nav opacity={this.state.navOpacity} borderBottomWidth={this.props.bottomBorderWidth} />
        <Header height={this.props.headerHeight} borderBottomWidth={this.props.bottomBorderWidth} />
      </div >
    )
  }
}
