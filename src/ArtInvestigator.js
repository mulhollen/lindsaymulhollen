import React, { Component } from 'react';
import emojis from 'emojis-list';
import lindsay from './img/lindsay.jpg';
import travel from './img/travel_React.jpg';
import './App.css';
import Portfolio from './Portfolio.js';
import H1 from './components/H1.js';
import Video from './components/Video.js';
import Footer from './components/Footer.js';


class ArtInvestigator extends Component {
    render() {
        return (
            <div>
                <Video className="static" video="https://assets.bonappetit.com/clips/5ace10e2d2b1c178c2958818/720p/pass/Kimchi_Pancakes-Step_01_v1_20180314.mp4.mp4" />
                <div className="d-flex justify-content-center flex-column port-h1 bodyWidth">
                    <h1 className="m-3 text-center">What do you call an aligator wearing a vest?</h1>
                    <h3 className="m-3">Learn about art + grow emotional intelligence the fun way. Art Investigator is an accompaninment app for The Frist Museum's <i>Feat.</i> exhibit by Nick Cave. Focusing on building emotional intelligence, interest in art, and creating points of interaction for children ages 7 to 11 and their grownup.</h3>
                </div>
                <div className="bodyWidth yellow d-flex flex-row my-5">
                    <img className="w-50" src={lindsay} alt="" />
                    <div>
                        <h3>the challenge:</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArtInvestigator;