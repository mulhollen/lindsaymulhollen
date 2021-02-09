import React, { Component } from 'react';
import emojis from 'emojis-list';
import lindsay from '../img/lindsay.jpg';
import travel from '../img/travel_React.jpg';
// import './App.css';
import Portfolio from '../components/Portfolio.js';
import H1 from '../shared/H1.js';
import Video from '../shared/Video.js';
import Footer from '../shared/Footer.js';
import liv from '../img/ArtInvestigator/liv_app_2.jpg';
import challenge from '../img/ArtInvestigator/challenge.jpg';
import search from '../img/ArtInvestigator/search.jpg';
import main from '../img/ArtInvestigator/mainscreen.jpg';
import soundsuit from '../img/ArtInvestigator/soundsuit-square.jpg';


class ArtInvestigator extends Component {
    render() {
        return (
            <div>
                <Video video="https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/Art-Investigator-Vid.mp4?alt=media&token=c75b8964-e397-4c69-b8b8-862549f8b109" />                
                {/* <img class="w-100" src={main} alt="" />                 */}
                <div className="d-flex justify-content-center flex-column port-h1 bodyWidth">
                    <h1 className="mt-5 text-center portH1">What do you call an aligator wearing a vest?</h1>
                    <h3 className="m-5">Learn about art + grow emotional intelligence the fun way. Art Investigator is an accompaninment app for The Frist Museum's <i>Feat.</i> exhibit by Nick Cave. Focusing on building emotional intelligence, interest in art, and creating points of interaction for children ages 7 to 11 and their grown-up.</h3>
                </div>
                <div className="bodyWidth d-flex justify-content-center yellow mb-3 mx-auto flip">
                    <div>
                        <h3 className="px-5 pt-5">meet evie and michelle.</h3>
                        <p className="px-5 py-3">
                            Evie is a curious, intelligent, and outgoing second grader with a strong love of the arts. She learns best when she can relate to content. Evie responds well to the addition of technology in static activities; to her, the added tech element makes the experience fun and engaging.
                        <br /><br />
                            Michelle is a busy mother of two that likes to invest time into cultural activities with her kids on the weekend. She wants her kids to love to learn and strives to make education fun. It’s important for Michelle to create memorable experiences with her kids.
                        </p>
                    </div>
                    <img className="pl-0 portPic" src={challenge} alt="" />
                </div>
                <div class="bodyWidth p-5 my-5 border border-dark">
                    <div>
                        <h3 className="mb-4">the challenge:</h3>
                        <p className="px-5 py-3">
                            Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). The challenge was creating a learning based app that grows emotional intelligence, relates children to the artist, and creates interaction points for parents and their children without overwhelming the exhibit itself.<br /><br />
                            Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional of The Cleveland Institute of Music, Heather Young Mandujano, a lesson plan focusing on Nick Cave, his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Working with Adventure Science Center designer Jim Savelyev, interaction points for parents and their children were constructed.
                        </p>
                    </div>
                </ div>
                <div className="bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto">
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
                <div className="bodyWidth d-flex justify-content-center yellow flip mb-3 mx-auto">
                    <div>
                        <h3 className="px-5 pt-5">the exhibit:</h3>
                        <p className="px-5 py-3">
                            On first glance <i>Feat.</i> by Nick Cave is delightfully fun and kid accessible. Once you dig deeper, the bright, eclectic art Cave builds, speaks to issues surrounding identity, social justice, specifically race, gun violence, and civic responsibility.
                       <br />
                       <br />
                            Feeling particularly vulnerable after the beating of Rodney King, Cave began unintentionally collecting discarded and forgotten objects and creating soundsuits. Realizing only after the first completion, he had created something that could be worn which would conceal his race, gender, and class. 
                        <br />
                        <br />
                            For me, there was a challenge in taking Cave’s feelings and motivations and sharing them with the user in a way that could help her relate without taking away the creativity and imagination evoked by the exhibit. Cave wants his art to spark viewers’ imaginations and aspirations, and it was important for me to let the app convey that as well. 
                        </p>                        
                    </div>
                    <img className="pl-0 portPic" src={soundsuit} alt="" />
                </div>
                <div class="bodyWidth p-5 my-5 border border-dark">
                    <div>
                        <h3 className="mb-4">the code:</h3>
                        <p className="px-5 py-3">
                            Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). The challenge was creating a learning based app that grows emotional intelligence, relates children to the artist, and creates interaction points for parents and their children without overwhelming the exhibit itself.<br /><br />
                            Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional of The Cleveland Institute of Music, Heather Young Mandujano, a lesson plan focusing on Nick Cave, his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Working with Adventure Science Center designer Jim Savelyev, interaction points for parents and their children were constructed.
                        </p>
                    </div>
                </ div>
                <div className="bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto">
                    <img className="pl-0 portPic" src={search} alt="" />
                    <div>
                        <h3 className="px-5 pt-5">lessons learned:</h3>
                        <ul className="px-5 py-3">
                            <li>Create an engaging and interactive way for the user to experience and understand art.</li>
                            <li>Design a storybook style app that allows the user to be engaged in a linear way and not to feel like they are just reading the museum placards.</li>
                            <li>Foster realitibly and interactibility for the user to feel like they are a part of the process using relatibility as a way to create solid foundations for learning and emotional intelligence.</li>
                            <li>Build activities to engage users and eliminate monotony fatigue, allowing the user to focus on and digest the exhibit.</li>
                            <li>Produce genuine interaction points between primary users and their guardians that teach vocabulary, emotional intelligence, and art.</li>
                        </ul>
                    </div>
                </div>
                <img class="w-100 mt-5" src={liv} alt="" />
                <Footer />
            </div>
        );
    }
}

export default ArtInvestigator;