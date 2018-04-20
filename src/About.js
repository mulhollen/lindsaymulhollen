import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import lindsay from './img/photostrip.jpg';
import './App.css';
import emojis from 'emojis-list';

console.log(emojis);
class About extends Component {
    render() {
        return (
            <div className="bodyWidth d-flex flex-row justify-content-center mt-5">
                <div className="">
                    <img src={lindsay} className="" alt="logo" />
                </div>
                <div className="aboutWidth ml-5">
                    <h1 className="mb-4">It's ya girl {emojis[1244]}</h1>
                    <p>
                        Inspired to get a start in development after encountering interactive museum exhibits, I'm growing my passion for puzzle solving, brainstorming, and outside of the box thinking as an Apprentice Front-end Developer + UX/UI Designer at Nashville Software School. 
                        <br />
                        <br />                        
                        I'm excited to bring my unique background to the development world where I plan to make my mark with innovative thinking and motivation to tackle even the most unthinkable projects.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;




