import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';
import squiggle from './img/squiggleline.png';


function Nav() {
    return (
        <Router>
            <div>
                <nav className="boxshadow d-flex flex-row justify-content-between px-5 py-4">
                    <div className="align-items-center">
                        <img className="logo" src={squiggle} alt="logo" />
                        <Link to='/'>LM</Link>
                    </div>
                    <div className="d-flex align-items-center">
                    <Link className="ml-5" to='/About'>ABOUT</Link>
                    <Link className="mx-5" to='/Portfolio'>PORTFOLIO</Link>
                    <Link className="mr-5" to='/Resume'>RESUME</Link>
                    </div>
                </nav>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Portfolio' component={Portfolio} />
                    <Route path='/Resume' component={Resume} />
                </div>
            </div>
        </Router>
    );
}


export default Nav;


