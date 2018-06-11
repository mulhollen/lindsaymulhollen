import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import emojis from 'emojis-list';
import AI from './img/ArtInvestigator/ArtInvestigator.jpg';
import ArtInvestigator from './ArtInvestigator.js';
import neos from './img/NDT/neos.jpg';
import EverythingHappens from './img/EverythingHappens/EHsquare.jpg';
import './App.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="bodyWidth">
                <h1 className="text-center nunito my-5">{emojis[2431]} here's what I've been working on:</h1>
                <div>
                    <div className="d-flex flex-column mx-auto">
                        <div className="hovereffect m-3">
                            <img src={AI} className="w-100" alt="logo" />
                            <div className="overlay">
                                <Link className="portLink" to='/ArtInvestigator'><h2>art<br />investigator</h2></Link>
                            </div>
                        </div>
                        {/* the about */}
                        <div className="d-flex justify-content-center yellow flex-row">
                            <div>
                                <h3 className="px-5 pt-5">art investigator.</h3>
                                <p className="px-5 py-3">
                                Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). Working with Nick Cave's Feat. exhibit at The Frist Museum in Nashville, Tennessee, Art Investigator is an interactive tour through the exhibit that focuses on learning, emotional intelligence, and creating interaction points for parents and their children.
                                <br /><br />                                
                                <i className="text-muted"> CRUD Application - Firebase - Firebase Storage Bucket - Jquery - Sass - Bootstrap</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="hovereffect m-3">
                            <img src={EverythingHappens} className="w-100" alt="logo" />
                            <div className="overlay">
                                <Link className="portLink" to='/EverythingHappens'><h2>everything<br />happens</h2></Link>                          
                            </div>
                        </div>
                        <div className="hovereffect m-3">
                            <img src={neos} className="w-100" alt="logo" />
                            <div className="overlay">
                                <h2>neos<br />dance<br />theatre</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Portfolio;




