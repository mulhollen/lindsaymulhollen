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
                <Video video="https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/Art-Investigator-Vid.mp4?alt=media&token=c75b8964-e397-4c69-b8b8-862549f8b109" />
                <H1 />
                <Portfolio />
                <Footer />
            </div>
        );
    }
}

export default Home;


