import React, { Component } from 'react';
import emojis from 'emojis-list';
import lindsay from './img/lindsay.jpg';
import travel from './img/travel_React.jpg';
import './App.css';
import Portfolio from './Portfolio.js';
import H1 from './components/H1.js';
import Video from './components/Video.js';


class Home extends Component {
    render() {
        return (
            <div>
                <Video />
                <H1 />
                <Portfolio />
                <footer>
                    <h3 className="sans m-5">&copy; lindsay mulhollen 2018</h3>
                    
                </footer>
            </div>
        );
    }
}

export default Home;
