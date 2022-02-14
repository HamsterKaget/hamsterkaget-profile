import React from "react";
import '../App.scss';
import htmlcss from '../image/html-css.png'
import javascript from '../image/javascript.png'
import  java from '../image/java.png'
import react from '../image/react.png'
import sass from '../image/sass.png'

class Slider extends React.Component {
    render() {
        return (
            <div className="slider-wrapper">
                <div className="slider-container">
                    
                    <div className="slider">
                        <div className="number-text">1 / 5</div>
                            <img src={htmlcss} />
                    </div>
                    <div className="slider">
                        <div className="number-text">2 / 5</div>
                            <img src={javascript} />
                    </div>
                    <div className="slider">
                        <div className="number-text">3 / 5</div>
                            <img src={react} />
                    </div>
                    <div className="slider">
                        <div className="number-text">4 / 5</div>
                            <img src={sass} />
                    </div>
                    <div className="slider">
                        <div className="number-text">5 / 5</div>
                            <img src={java} />
                    </div>

                    {/* Button Next & prev */}
                    <a className="prev" onclick="plusSlides(-1)"><i class="fa-solid fa-circle-chevron-right"></i></a>
                    <a className="next" onclick="plusSlides(1)"><i class="fa-solid fa-circle-chevron-right fa-rotate-180"></i></a>
                    
                    {/* Image text */}
                    <div className="caption-container">
                        <p id="caption"></p>
                    </div>

                    {/* Thumbnail Images*/}
                    <div class="row">
                        <div class="column">
                        <img class="demo cursor" src={htmlcss} style="width:100%" onclick="currentSlide(1)" alt="The Woods" />
                        </div>
                        <div class="column">
                        <img class="demo cursor" src={javascript} style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre" />
                        </div>
                        <div class="column">
                        <img class="demo cursor" src={react} style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords" />
                        </div>
                        <div class="column">
                        <img class="demo cursor" src={sass} style="width:100%" onclick="currentSlide(4)" alt="Northern Lights" />
                        </div>
                        <div class="column">
                        <img class="demo cursor" src={java} style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;