import React, { Component } from 'react';
import lindsay from './img/photostrip.jpg';
import './App.css';
import emojis from 'emojis-list';
import Footer from './components/Footer';

console.log(emojis);
class About extends Component {
    render() {
        return (
            <div>
                <div className="bodyWidth d-flex justify-content-center mt-5 about-div">
                    <div className="pic-center">
                        <img src={lindsay} className="" alt="logo" />
                    </div>
                    <div className="aboutWidth">
                        <h1 className="mb-4 nunito">It's ya girl {emojis[1244]}</h1>
                        <p>
                            Inspired to get a start in development after encountering interactive museum exhibits, I'm growing my passion for puzzle solving, brainstorming, and outside of the box thinking as an Apprentice Front-end Developer + UX/UI Designer at Nashville Software School. 
                            <br />
                            <br />                        
                            I'm excited to bring my unique background to the development world where I plan to make my mark with innovative thinking and motivation to tackle even the most unthinkable projects.
                        </p>
                        <div>
                            <div class="">
                                <a href={`mailto:lindsaymulhollen@gmail.com`} className="mr-3"><i class="fas fa-at fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/mulhollen/" target="_blank" className="mr-3"><i class="fab fa-linkedin-in fa-2x"></i></a>
                                <a href="https://github.com/mulhollen" target="_blank" className="mr-3"><i class="fab fa-github fa-2x"></i></a>
                                <a href="https://www.instagram.com/didicrytoday" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        );
    }
}

export default About;




