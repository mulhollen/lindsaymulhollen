import React, { Component } from 'react';
// import './App.css';
import resume from '../img/LindsayMulhollenResume.png';
import Footer from '../shared/Footer.js';

class Resume extends Component {
    render() {
        return (
            <div className="">
                <div className="d-flex justify-content-center justify-content-start">
                    <img src={resume} className="resumeWidth" />                
                </div>
                <Footer />
            </div>
        );
    }
}

export default Resume;







