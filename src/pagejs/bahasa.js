import React from "react";
import '../App.scss';

class Bahasa extends React.Component {
    render() {
        return (

            <div className="bahasa">
                <div className="bahasa-wrapper">
                    <div className="heading-title">
                        <hr className="garis" />
                        <h2>my workbench !</h2>
                        <hr className="garis" />
                    </div>
                    
                    <section className="bahasa-icon">
                        <div className="icon-wrapper">
                                <div className="icon">
                                    <i class="fa-brands fa-html5 fa-3x html"></i>
                                    <p>HTML</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-css3-alt fa-3x css"></i>
                                    <p>CSS</p>
                                </div>
                                    <div className="icon">
                                    <i class="fa-brands fa-js fa-3x js"></i>
                                    <p>JS</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-java fa-3x java"></i>
                                    <p>java</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-php fa-3x php"></i>
                                    <p>php</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-python fa-3x python"></i>
                                    <p>python</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-solid fa-database fa-3x sql"></i>
                                    <p>sql</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-sass fa-3x sass"></i>
                                    <p>sass</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-bootstrap fa-3x boostrap"></i>
                                    <p>boostrap</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-react fa-3x react"></i>
                                    <p>react</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-node fa-3x node"></i>
                                    <p>node</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-git-alt fa-3x git"></i>
                                    <p>git</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-github fa-3x git"></i>
                                    <p>github</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-ubuntu  fa-3x ubuntu"></i>
                                    <p>ubuntu</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-windows fa-3x windows"></i>
                                    <p>windows</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-brands fa-figma fa-3x figma"></i>
                                    <p>figma</p>
                                </div>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}

export default Bahasa;