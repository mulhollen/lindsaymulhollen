import React, { Component } from 'react';
import '../App.css';


function Video(props){ 
        return (
            <video id="myvid" loop autoPlay="autoplay" className="w-100">
                <source src={props.video} type="video/mp4" />
            </video>
        );
    }

export default Video;



