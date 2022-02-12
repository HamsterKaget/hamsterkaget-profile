import '../App.scss';
import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div class="navbar">
                    <div class="navbar-left">
                        <div class="container-navbar-left">
                            <h4><a href="index.html">HamsterKaget Studio</a></h4>
                            <p class="slogan">Making Stuff Free For Everyone</p>
                        </div>
                    </div>
                    <div class="navbar-right">
                        <div class="container-navbar-right">
                            <ul>
                                <li><a class="home" href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Invite Bot</a></li>
                                <li><a href="#"><span class="material-icons-outlined">menu</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;