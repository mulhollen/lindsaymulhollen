import React, { Component } from 'react';
import emojis from 'emojis-list';
import lindsay from './img/lindsay.jpg';
import travel from './img/travel_React.jpg';
import './App.css';
import Portfolio from './Portfolio.js';
import H1 from './components/H1.js';
import Video from './components/Video.js';
import Footer from './components/Footer.js';
import liv from './img/ArtInvestigator/liv_app_2.jpg';
import challenge from './img/ArtInvestigator/challenge.jpg';
import search from './img/ArtInvestigator/search.jpg';


class ArtInvestigator extends Component {
    render() {
        return (
            <div>
                <Video className="static" video="https://assets.bonappetit.com/clips/5ace10e2d2b1c178c2958818/720p/pass/Kimchi_Pancakes-Step_01_v1_20180314.mp4.mp4" />
                <div className="d-flex justify-content-center flex-column port-h1 bodyWidth">
                    <h1 className="mt-5 text-center portH1">What do you call an aligator wearing a vest?</h1>
                    <h3 className="m-5">Learn about art + grow emotional intelligence the fun way. Art Investigator is an accompaninment app for The Frist Museum's <i>Feat.</i> exhibit by Nick Cave. Focusing on building emotional intelligence, interest in art, and creating points of interaction for children ages 7 to 11 and their grownup.</h3>
                </div>
                <div className="bodyWidth d-flex justify-content-center yellow flex-row mb-3 mx-auto">
                    <img className="pl-0 portPic" src={challenge} alt="" />
                    <div>
                        <h3 className="px-5 pt-5">the challenge:</h3>                        
                        <p className="px-5 py-3">Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). Working with Nick Cave's Feat. exhibit at The Frist Center for the Visual Arts  in Nashville, Tennessee, Art Investigator is an interactive tour through the exhibit that focuses on learning, emotional intelligence, and creating interaction points for parents and their children.</p>
                    </div>
                </div>
                <p class="bodyWidth p-5 my-5 border border-dark">The primary user research was done working with a family of four with a daughter and son in the age early reading age range, two additional children in the age range, and a mother and daughter. Interviews were conducted to guage what interests the designated age range when visiting museums and art exhibits. These interviews also helped determine the emotional vs. vocabulary comprehension level as well as their familarility with technology usage. Observations were also conducted at The Adventure Science Center to understand what attracts early-reading-age children.<br />Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional at The Cleveland Institute of Music, Heather Young Mandujano,a lesson plan focusing on Nick Cave and his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Additionally, working with a designer from the Adventure Science Center in Nashville, Tennessee, Jim Savelyev, interaction points for parents and their children were constructed.</p>
                <div className="bodyWidth d-flex justify-content-center yellow flex-row my-3 mx-auto">
                    <div>
                        <h3 className="px-5 pt-5">the challenge:</h3>
                        <p className="px-5 py-3">Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). Working with Nick Cave's Feat. exhibit at The Frist Center for the Visual Arts  in Nashville, Tennessee, Art Investigator is an interactive tour through the exhibit that focuses on learning, emotional intelligence, and creating interaction points for parents and their children.</p>
                    </div>
                    <img className="pl-0 portPic" src={search} alt="" />
                </div>
                <img class="w-100 mt-5" src={liv} alt="" />
                <Footer />
            </div>
        );
    }
}

export default ArtInvestigator;