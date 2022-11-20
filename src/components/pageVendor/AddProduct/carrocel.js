// https://www.npmjs.com/package/react-responsive-carousel
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" alt='' />
                    <p className="legend">Legend 1</p>
                </div>
                
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls