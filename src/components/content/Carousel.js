import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Carousel1 extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel dynamicHeight="true">
                    <div>
                        <img src="https://i.ibb.co/yVv6BJG/image.png" />
                        <p className="legend">SS Railings</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/3TZY8QY/20190126-122251.jpg" />
                        <p className="legend">Kitchen Trolley</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/SdxXYDM/FB-IMG-1547220878048.jpg" />
                        <p className="legend">Furniture</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};
export default Carousel1;