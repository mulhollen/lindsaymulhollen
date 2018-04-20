import React, { Component } from 'react';
import emojis from 'emojis-list';
import lindsay from './img/lindsay.jpg';
import travel from './img/travel_React.jpg';
import './App.css';
import Portfolio from './Portfolio.js';
import H1 from './components/H1.js';
import Video from './components/Video.js';
import Footer from './components/Footer.js';


class Home extends Component {
    render() {
        return (
            <div>
                <Video video="https://assets.bonappetit.com/clips/5ace10e2d2b1c178c2958818/720p/pass/Kimchi_Pancakes-Step_01_v1_20180314.mp4.mp4" />
                <H1 />
                <Portfolio />
                <Footer />
            </div>
        );
    }
}

export default Home;
