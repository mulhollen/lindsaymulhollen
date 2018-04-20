import React, { Component } from 'react';
import '../App.css';


class Video extends Component {
    render() {
        return (
            <video loop webkit-playsInline="true" playsInline="playsInline" autoplay="autoplay" className="w-100">
                <source src="https://assets.bonappetit.com/clips/5ace10e2d2b1c178c2958818/720p/pass/Kimchi_Pancakes-Step_01_v1_20180314.mp4.mp4" type="video/mp4" />
            </video>
        );
    }
}

export default Video;



