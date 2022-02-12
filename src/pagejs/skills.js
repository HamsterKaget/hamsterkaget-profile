import React from "react";
import react from "react";
import '../App.scss'

class skills extends React.Component {
    render() {
        return (
            
            <div class="language">
            <div class="language-wrapper">
                <div class="container">
                    
                    <div class="heading-title">
                        <h2>My Skills !</h2>
                        <hr class="garis"/>
                    </div>
                    <section class="languages-bar">
                        <div class="container-left">
                            
                            <p class="name-lang"><i class="fa-brands fa-html5 html-icon"></i> HTML ( HyperText Markup Language )</p>
                            <div class="background-bar">
                                <div class="skill html"></div>
                            </div>
                            
                            <p class="name-lang"><i class="fa-brands fa-css3-alt css-icon"></i> CSS ( Cascading Style Sheet )</p>
                            <div class="background-bar">
                                <div class="skill css"></div>
                            </div>
                            
                            <p class="name-lang"><i class="fa-brands fa-js js-icon"></i> JS ( JavaScript )</p>
                            <div class="background-bar">
                                <div class="skill js"></div>
                            </div>
    
                        </div>
            
                        <div class="container-right">
    
                            <p class="name-lang"><i class="fa-brands fa-java java-icon"></i> JAVA </p>
                            <div class="background-bar">
                                <div class="skill java"></div>
                            </div>
    
                            <p class="name-lang"><i class="fa-brands fa-php php-icon"></i> PHP ( PHP: Hypertext Preprocessor )</p>
                            <div class="background-bar">
                                <div class="skill php"></div>
                            </div>
                            
                            <p class="name-lang"><i class="fa-solid fa-database"></i> SQL ( Structured Query Language )</p>
                            <div class="background-bar">
                                <div class="skill sql"></div>
                            </div>
                            
                            
                        </div>
    
                    </section>
    
                    
    
    
                </div>
            </div>
        </div>
    

        )
    }
}