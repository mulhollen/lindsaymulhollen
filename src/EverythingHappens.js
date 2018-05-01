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
import main from './img/ArtInvestigator/mainscreen.jpg';
import soundsuit from './img/ArtInvestigator/soundsuit-square.jpg';

class EverythingHappens extends Component {
    render() {
        return (
            <div>
                {/* <Video className="static" video="https://assets.bonappetit.com/clips/5ace10e2d2b1c178c2958818/720p/pass/Kimchi_Pancakes-Step_01_v1_20180314.mp4.mp4" /> */}
                <img class="w-100 mt-5" src="https://static.wixstatic.com/media/853691_696c7860e9dfd09f4574b7b8584fb7d7.jpg/v1/fill/w_1839,h_1224,al_c,q_90,usm_0.66_1.00_0.01/853691_696c7860e9dfd09f4574b7b8584fb7d7.webp" alt="" />
                <div className="d-flex justify-content-center flex-column port-h1 bodyWidth">
                    <h1 className="mt-5 text-center portH1">Ideally, where do you see yourself in five years?</h1>
                    <h3 className="m-5">A collaborative dance + interactive media piece that looks into hopes, dreams, and post-collegiate dissonance.</h3>
                </div>
                <div className="bodyWidth d-flex justify-content-center yellow flex-row mb-3 mx-auto">
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
                    <img className="pl-0 portPic" src={challenge} alt="" />
                </div>
                <div class="bodyWidth p-5 my-5 border border-dark">
                    <div>
                        <h3 className="mb-4">the process:</h3>
                        <p className="px-5 py-3">
                            Initial research was done on post collegiate dissonance and the trend of the increasing age of emerging adulthood. Set/projection-screen design was created to mirror findings that show psychological development and emotional intelligence of college students is beginning to mirror that of teenagers rather than the emerging adulthood status of generations before.
                        </p>
                    </div>
                </ div>
                <div className="bodyWidth d-flex justify-content-center yellow flex-row my-3 mx-auto">
                    <img className="pl-0 portPic" src={search} alt="" />
                    <div>
                        <h3 className="px-5 pt-5">user focused goals:</h3>
                        <ul className="px-5 py-3">
                            <li>Create an engaging and interactive way for the user to experience and understand art.</li>
                            <li>Design a storybook style app that allows the user to be engaged in a linear way and not to feel like they are just reading the museum placards.</li>
                            <li>Foster realitibly and interactibility for the user to feel like they are a part of the process using relatibility as a way to create solid foundations for learning and emotional intelligence.</li>
                            <li>Build activities to engage users and eliminate monotony fatigue, allowing the user to focus on and digest the exhibit.</li>
                            <li>Produce genuine interaction points between primary users and their guardians that teach vocabulary, emotional intelligence, and art.</li>
                        </ul>
                    </div>
                </div>
                <div class="bodyWidth p-5 my-5 border border-dark">
                    <h3 className="mb-4">
                        <i>"Olivia CANNOT stop talking about [Art Investigator]. She came into my bed last night and said she was so happy that she saw how someone else faced their fears. We got to have a great conversation about fears and power!"</i>
                    </h3>
                </ div>
                <div className="bodyWidth d-flex justify-content-center yellow flex-row mb-3 mx-auto">
                    <div>
                        <h3 className="px-5 pt-5">the exhibit:</h3>
                        <p className="px-5 py-3">
                            On first glance <i>Feat.</i> by Nick Cave is delightfully fun and kid accessible. Once you dig deeper into the bright, eclectic art Cave builds, you learn he builds armor that speaks to issues surrounding identity, social justice, specifically race, gun violence, and civic responsibility.
                        </p>
                        <p className="px-5 py-3">
                            Feeling particularly vulnerable after the beating of Rodney King, Cave began unintentionally collecting discarded and forgotten objects and creating soundsuits. Realizing only after the first completion, he had created something that could be worn which would conceal his race, gender, and class.
                        </p>
                        <p className="px-5 py-3">
                            For me, there was a challenge in taking Cave’s feelings and motivations and sharing them with the user in a way that could help her relate without taking away the creativity and imagination evoked by the exhibit. Cave wants his art to spark viewers’ imaginations and aspirations, and it was important for me to let the app convey that as well.
                        </p>
                    </div>
                    <img className="pl-0 portPic" src={soundsuit} alt="" />
                </div>
                <img class="w-100 mt-5" src={liv} alt="" />
                <Footer />
            </div>
        );
    }
}

export default EverythingHappens;