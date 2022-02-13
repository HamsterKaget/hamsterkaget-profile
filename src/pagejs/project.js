import React from 'react';
import '../App.scss';
import image from '../image/code.jpg';

class Project extends React.Component {
    render() {


        return (
            <div className="project-wrapper">
                <div className="title">
                    <hr />
                    <h3>My Project so far</h3>
                </div>
                <div className='cards'>
                    <div className='card one'>
                        <img src={image} />
                        <div className='card-contianer'>
                            <h4>React Website</h4>
                            <hr />
                            <p>Website static yang dibuat menggunakan React dan SCSS</p>
                            <a className='button-small' href='#'><i class="fa-solid fa-code"></i>Source Code</a>
                            <a className='button-small' href='#'><i class="fa-solid fa-location-arrow"></i>Visit Project</a>
                        </div>
                    </div>
                    <div className='card two'>
                        <img src={image} />
                        <div className='card-contianer'>
                            <h4>React Website</h4>
                            <hr />
                            <p>Website static yang dibuat menggunakan React dan SCSS</p>
                            <a className='button-small' href='#'><i class="fa-solid fa-code"></i>Source Code</a>
                            <a className='button-small' href='#'><i class="fa-solid fa-location-arrow"></i>Visit Project</a>
                        </div>
                    </div>
                    <div className='card three'>
                        <img src={image} />
                        <div className='card-contianer'>
                            <h4>React Website</h4>
                            <hr />
                            <p>Website static yang dibuat menggunakan React dan SCSS</p>
                            <a className='button-small' href='#'><i class="fa-solid fa-code"></i>Source Code</a>
                            <a className='button-small' href='#'><i class="fa-solid fa-location-arrow"></i>Visit Project</a>
                        </div>
                    </div>
                    <div className='card four'>
                        <img src={image} />
                        <div className='card-contianer'>
                            <h4>React Website</h4>
                            <hr />
                            <p>Website static yang dibuat menggunakan React dan SCSS</p>
                            <a className='button-small' href='#'><i class="fa-solid fa-code"></i>Source Code</a>
                            <a className='button-small' href='#'><i class="fa-solid fa-location-arrow"></i>Visit Project</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Project;