import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import lindsay from './img/lindsay.jpg';
import travel from './img/travel_React.jpg';
import AI from './img/ArtInvestigator/mainsquare.jpg';
import './App.css';
import ArtInvestigator from './ArtInvestigator.js';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="d-flex flex-row">
                        <div className="hovereffect m-3">
                            <img src={AI} className="w-100" alt="logo" />
                            <div className="overlay">
                                <Link className="portLink" to='/ArtInvestigator'><h2>Art<br />Investigator</h2></Link>
                            </div>
                        </div>
                        <div className="hovereffect m-3">
                            <img src={lindsay} className="w-100" alt="logo" />
                            <div className="overlay">
                                <h2>NDT<br />+ ODI</h2>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="hovereffect m-3">
                            <img src={travel} className="w-100" alt="logo" />
                            <div className="overlay">
                                <h2>Capstone 2</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Portfolio;



