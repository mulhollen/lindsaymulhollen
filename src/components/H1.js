import React, { Component } from 'react';
import emojis from 'emojis-list';
import '../App.css';


class H1 extends Component {
    render() {
        return (
            <div className="margin-neg m-5 pt-5 mainH1 d-flex justify-content-center flex-column">
                <h1 className="ml-words sizefix">{emojis[775]}&nbsp;hey, it's lindsay!</h1>
                <div className="d-flex flex-row justify-content-start ml-words sizefix">
                    <h1 className="sizefix">i make:</h1>
                    <div className="">
                        <h1 className="animated-words sizefix">
                            <span className="">fun&nbsp;websites.</span>
                            <span className="">thoughtful&nbsp;UI</span>
                            <span className="">innovative&nbsp;UX</span>
                            <span className="">an&nbsp;awesome&nbsp;dance&nbsp;party.</span>
                            <span className="">decent&nbsp;guacamole.</span>
                            <span className="">coding&nbsp;fun.</span>
                        </h1>
                    </div>
                </div>
                <h1 className="ml-words display-4">&nbsp;</h1>                
            </div>
        );
    }
}

export default H1;


