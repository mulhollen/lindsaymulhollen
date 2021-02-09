import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import emojis from 'emojis-list';
import AI from '../img/ArtInvestigator/ArtInvestigator.jpg';
import CanvasImg from '../img/Canvas/CanvasCrop.png';
import ArtInvestigator from '../projects/ArtInvestigator.js';
import EverythingHappens from '../img/EverythingHappens/kristen.jpg';
import Canvas from '../projects/Canvas.js';
// import './App.css';
import Footer from '../shared/Footer';

class Portfolio extends Component {
    render() {
        return (
            <div className="bodyWidth">
                <h1 className="text-center nunito my-5">{emojis[2431]} here's what I've been working on:</h1>
                <div>
                    {/* Art Investigator */}
                    <div className="d-flex flex-column mx-auto">
                        <div className="hovereffect my-3">
                            <img src={AI} className="w-100" alt="logo" />
                            <div className="overlay">
                                <Link className="portLink" to='/ArtInvestigator'><h2>art<br />investigator</h2></Link>
                            </div>
                        </div>
                        {/* the about */}
                        <div className="d-flex mx-auto yellow flex-row">
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
                    {/* Canvas */}
                    <div className="d-flex flex-column mx-auto">
                        <div className="hovereffect my-3">
                            <img src={CanvasImg} className="w-100" alt="logo" />
                            <div className="overlay">
                                <Link className="portLink" to='/Canvas'><h2>canvas</h2></Link>
                            </div>
                        </div>
                        {/* the about */}
                        <div className="d-flex mx-auto yellow flex-row">
                            <div>
                                <h3 className="px-5 pt-5">canvas.</h3>
                                <p className="px-5 py-3">
                                    Canvas is a multi-player, gamified, interactive art experience in the vain of The Cleveland Museum of Art ARTLENS Gallery exhibits. Canvas pits one to four players against each other to create a sort of exquisite corps of a broken-up piece of fine art.
                                <br /><br />
                                    <i className="text-muted"> React - Firebase - Rebase - Local Storage - React Canvas Draw - React Color - React Router Dom - Bootstrap</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Everything Happens */}
                    <div className="d-flex flex-column mx-auto">
                        <div className="hovereffect my-3">
                            <img src={EverythingHappens} className="w-100" alt="logo" />
                            <div className="overlay">
                                <Link className="portLink" to='/EverythingHappens'><h2>everything<br />happens</h2></Link>
                            </div>
                        </div>
                        {/* the about */}
                        <div className="d-flex mx-auto yellow flex-row">
                            <div>
                                <h3 className="px-5 pt-5">everything happens.</h3>
                                <p className="px-5 py-3">
                                    A collaborative dance + interactive media piece that looks into hopes, dreams, and post-collegiate dissonance. Using research to inspire choreography, video production,  and set design,  <i>Everything Happens</i> was a live concert work of integrated media design and modern dance.
                                <br /><br />
                                    <i className="text-muted">Media Design - Stage Managing - Set Design - Video Production in Avid Media Composer & Adobe After Effects - Lighting Design</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Portfolio;




