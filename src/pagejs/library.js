import React from "react";
import '../App.scss';

class Library extends React.Component {
    render() {
        return (

            <div class="library">
                <div class="library-wrapper">
                    <div class="container">

                        <section class="library-bar">
                            <div class="container-parent">
                                <div class="container-left">

                                    <p class="name-lib-lang"><i class="fa-brands fa-bootstrap boostrap-icon boostrap"></i> Boostrap </p>
                                    <div class="background-lib-bar">
                                        <div class="skill boostrap"></div>
                                    </div>
                                    <p class="name-lib-lang"><i class="fa-brands fa-sass sass-icon sass"></i> SASS / SCSS </p>
                                    <div class="background-lib-bar">
                                        <div class="skill sass"></div>
                                    </div>
                                    
                                </div>
                                <div class="container-center">
                                    <p class="name-lib-lang"><i class="fa-brands fa-react react-icon react"></i> React.js </p>
                                    <div class="background-lib-bar">
                                        <div class="skill react"></div>
                                    </div>
                                    <p class="name-lib-lang"><i class="fa-brands fa-node-js node-icon node"></i> Node.js </p>
                                    <div class="background-lib-bar">
                                        <div class="skill node"></div>
                                    </div>
                                    
                                </div>
                                <div class="container-right">
                                    <p class="name-lib-lang"><i class="fa-brands fa-discord discord-icon git"></i> Discord.js </p>
                                    <div class="background-lib-bar">
                                        <div class="skill discord"></div>
                                    </div>
                                    <p class="name-lib-lang"><i class="fa-brands fa-git-alt fa-lg git-icon git"></i> GIT </p>
                                    <div class="background-lib-bar">
                                        <div class="skill git"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

        )
    }
}

export default Library;