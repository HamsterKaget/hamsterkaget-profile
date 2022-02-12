import '../App.scss';
import React from "react";

class Landing extends React.Component {
    render() {
        return (
            <div class="top">
                <div class="top-wrapper">
                    <div class="avatar-hamster"></div>
                    <h1>Hamster Kaget Studio</h1>
                    <p>Brand personal yang berfokus ke pengembangan diri melalui project project yang kami buat<br />tujuan kami ingin memberi kemudahan dan
                        meningkatkan produktifitas bagi semua.
                    </p>
                    <a href="#" class="button">Lebih Lanjut</a>
                </div>
            </div>
        )
    }
}

export default Landing;