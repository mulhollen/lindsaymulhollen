import React, { Component } from 'react';
import emojis from 'emojis-list';
import lindsay from './img/lindsay.jpg';
import travel from './img/travel_React.jpg';
import './App.css';
import Portfolio from './Portfolio.js';
import H1 from './components/H1.js';
import Video from './components/Video.js';
import Footer from './components/Footer.js';
import main from './img/EverythingHappens/kristen.jpg';
import interview from './img/EverythingHappens/interview.png';
import ellyn from './img/EverythingHappens/Single.jpg';
import trio from './img/EverythingHappens/Trio.jpg';

class EverythingHappens extends Component {
    render() {
        return (
            <div>
                {/* <Video className="static" video="https://assets.bonappetit.com/clips/5ace10e2d2b1c178c2958818/720p/pass/Kimchi_Pancakes-Step_01_v1_20180314.mp4.mp4" /> */}
                <img class="w-100" src={main} alt="" />
                <div className="d-flex justify-content-center flex-column port-h1 bodyWidth">
                    <h1 className="mt-5 text-center portH1">Ideally, where do you see yourself in five years?</h1>
                    <h3 className="m-5">A collaborative dance + interactive media piece that looks into hopes, dreams, and post-collegiate dissonance.</h3>
                </div>
                <div className="bodyWidth d-flex justify-content-center yellow flex-row mb-3 mx-auto">
                    <img className="pl-0 portPic" src={interview} alt="" />
                    <div>
                        <h3 className="px-5 pt-5">art backed by research.</h3>
                        <p className="px-5 py-3">
                            Working with choreographer, Erin Buck, <i>Everything Happens</i> is a collaborative, research based, dance and interactive media project that looks into ideality vs. reality and what that means to people devolping into the emerging adulthood state of their life.
                        <br /><br />
                            Taking a play on the adage "Everything happens for a reason", this Everything Happens was named to convey the feelings of the majority of research particpants that everything felt like it was happening but there was no clear reason.
                        <br /><br />                            
                            Conducting "man on the street" style interviews at The University of Akron, participants we're asked where they ideally would see themself in 5 years. How did they feel about that common interview question? How did they feel about having to make formative life choices as a teenager? They were then asked to take a step back, was their ideality realistic?
                        </p>
                    </div>
                </div>
                <div class="bodyWidth p-5 my-5 border border-dark">
                    <div>
                        <h3 className="mb-4">the process:</h3>
                        <p className="px-5 py-3">
                                Initial research was done on post collegiate dissonance and the trend of the increasing age of emerging adulthood. Set/projection-screen design was created to mirror findings that show psychological development and emotional intelligence of college students is beginning to mirror that of teenagers rather than the emerging adulthood status of generations before.
                            <br /><br />
                                After initial research was conducted, the "man of the street" interviews were shot featuring both undergraduate and graduate students, non-traditional students, and both tenured and associate professors. Using the interviews and psychological research, choreography was workshoped and created to also mirror the findings, feelings, and body language of the participants. Choreograpy was built in modern, pedestrian movements as inspired by the interviews.
                            <br /><br />
                                Projection design included four projection zones with 10 screens constructed using different weights and sheens of fabric that allowed the projected video to be seen completely but also look broken, matching the psychological research. With four projection zones, two were live video feeds being shot from the stage and front-of-house, and two were pre-recorded content: one being the interviews and another being a illusion mirrored image of a dancer.
                            <br /><br />
                                The piece was a culmination of mixed, interactive media, quilted together to create a engaging and interactive research based dance performance. <i>Everything Happens</i> premiered in "A Show By Some Seniors" at Thr University of Akron in April of 2012 in conjunction with other Honors Thesis works from students focusing in Dance Performance, Choreography, and Mass Media Production.
                        </p>
                    </div>
                </ div>
                <div className="bodyWidth d-flex justify-content-center yellow flex-row my-3 mx-auto">
                    <div>
                        <h3 className="px-5 pt-5">project goals:</h3>
                        <ul className="px-5 mx-3 py-3">
                            <li>Create a research backed collaborative work in media design and dance.</li>
                            <li>Incorporate psychological and sociological research into choreography and set design.</li>
                            <li>Design and Direct a multi-screen projection design including both live and prerecorded sources.</li>
                        </ul>
                    </div>
                    <img className="pl-0 portPic" src={ellyn} alt="" />
                </div>
                <div class="bodyWidth p-5 my-5 border border-dark">
                    {/* <Video video="https://player.vimeo.com/video/44778305" /> */}
                    <div><iframe className="" src="https://player.vimeo.com/video/44778305?title=0&byline=0&portrait=0"></iframe></div>
                </ div>
                <img class="w-100 mt-5" src={trio} alt="" />
                <Footer />
            </div>
        );
    }
}

export default EverythingHappens;