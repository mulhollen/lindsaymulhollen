import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import './App.css';
import resume from './img/LindsayMulhollenResume.png';
import Footer from './components/Footer.js';

class Resume extends Component {
    render() {
        return (
            <div>
                <img src={resume} className="w-100" />                
                <Footer />
            </div>
        );
    }
}

export default Resume;







