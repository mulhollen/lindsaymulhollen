import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import './App.css';
import resume from './img/LindsayMulhollenResume.pdf';
import Footer from './components/Footer.js';

class Resume extends Component {
    render() {
        return (
            <div>
                <embed src={resume} className="w-100 height-full" type='application/pdf' />                
                <Footer />
            </div>
        );
    }
}

export default Resume;







