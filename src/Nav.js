import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';
import squiggle from './img/squiggleline.png';
import logo from './img/lmlogostill.png';
import gif from './img/lmlogo.gif';
import ArtInverstigator from './ArtInvestigator.js';
import EverythingHappens from './EverythingHappens';
import Canvas from './Canvas';


class Nav extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: gif
        };
        this.playGif = this.playGif.bind(this);
        this.stopGif = this.stopGif.bind(this);
    }

    playGif() {
        this.setState({
            imgSrc: gif
        });
    }

    stopGif(){
        this.setState({
            imgSrc: logo
        });
    }

    render(){

        return (
            <Router>
                <div>
                    <nav className="boxshadow d-flex flex-row justify-content-between py-4">
                        <div className="align-items-center ">
                            <NavLink id="home-logo" to='/LindsayMulhollen'>
                                <img className="logo moblie-nav" src={this.state.imgSrc} alt="logo" onMouseEnter={this.playGif} onMouseLeave={this.stopGif} />
                            </NavLink>
                        </div>
                        <div className="lilNav">
                        <NavLink className="nav-link mx-4" to='/Portfolio'>PORTFOLIO</NavLink>
                        <NavLink className="nav-link mx-4" to='/About'>ABOUT</NavLink>
                        <NavLink className="nav-link mx-4" to='/Resume'>RESUME</NavLink>
                        </div>
                    </nav>
                    <div>
                        <Route exact path='/LindsayMulhollen' component={Home} />
                        <Route path='/About' component={About} />
                        <Route path='/Portfolio' component={Portfolio} />
                        <Route path='/Resume' component={Resume} />
                        <Route path='/ArtInvestigator' component={ArtInverstigator} />
                        <Route path='/EverythingHappens' component={EverythingHappens} />        
                        <Route path='/Canvas' component={Canvas} />                                                
                    </div>
                </div>
            </Router>
        );
    }
}

export default Nav;


