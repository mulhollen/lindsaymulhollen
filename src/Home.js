import React, { Component } from 'react';
import lindsay from './img/lindsay.jpg';
import travel from './img/travel_React.jpg';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <video loop webkit-playsInline="true" playsInline="playsInline" autoplay="autoplay" className="w-100">
                    <source src="https://assets.bonappetit.com/clips/5ace10e2d2b1c178c2958818/720p/pass/Kimchi_Pancakes-Step_01_v1_20180314.mp4.mp4" type="video/mp4" />
                </video>
                {/* h1 */}
                <div className="mainH1">
                    <h1 className="display-3">Hey, it's Lindsay</h1>
                    <div className="">
                        <h1 className="display-3">&nbsp;&nbsp;+ I Make&nbsp;</h1>
                        <h1 className="d-inline display-3 animated-words">
                            <span>Fun&nbsp;Websites.</span>
                            <span>Thoughtful&nbsp;&nbsp;UI&nbsp;Design.</span>
                            <span>Inovative&nbsp;&nbsp;User&nbsp;Experiences.</span>
                            <span>An&nbsp;Awesome&nbsp;Dance&nbsp;Party.</span>
                            <span>Decent&nbsp;Guacamole.</span>
                            <span>Coding&nbsp;Fun.</span>
                        </h1>
                    </div>
                </div>
                {/* end h1 */}
                {/* text + portfolio */}
                <div>
                    <h3 className="sans text-center my-5 py-5">this is where I will include a quote about myself!!</h3>
                    <div className="d-flex flex-row">
                            <div className="hovereffect">
                                <img src={lindsay} className="port50" alt="logo" />
                                    <div className="overlay">
                                        <h2>Art Investigator</h2>
                                        <p>
                                            <a href="#">LEARN MORE</a>
                                        </p>
                                    </div>
                            </div>
                        <div className="hovereffect">
                            <img src={lindsay} className="port50" alt="logo" />
                            <div className="overlay">
                                <h2>NDT<br />+ ODI</h2>
                                <p>
                                    <a href="#">LEARN MORE</a>
                                </p>
                            </div>
                        </div>                       
                    </div>
                    <div className="d-flex">
                        <div className="hovereffect">
                            <img src={travel} className="port100" alt="logo" />
                            <div className="overlay">
                                <h2>Capstone 2</h2>
                                <p>
                                    <a href="#">LEARN MORE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end text + portfolio */}                
                <footer>
                    <h3 className="sans m-5">&copy; lindsay mulhollen 2018</h3>
                    
                </footer>
            </div>
        );
    }
}

export default Home;
