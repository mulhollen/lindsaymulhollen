import React, { Component } from 'react';
import emojis from 'emojis-list';
import '../App.css';


class H1 extends Component {
    render() {
        return (
            <div className="mainH1 yellow p-5">
                <h1 className="displayFont">{emojis[775]}&nbsp;hey, it's lindsay!</h1>
                <div className="d-flex flex-row">
                    <h1 className="displayFont">I make:</h1>
                    <div className="">
                        <h1 className="animated-words">
                            <span className="displayFont">fun&nbsp;websites.</span>
                            <span className="displayFont">thoughtful&nbsp;UI</span>
                            <span className="displayFont">innovative&nbsp;UX</span>
                            <span className="displayFont">an&nbsp;awesome&nbsp;dance&nbsp;party.</span>
                            <span className="displayFont">decent&nbsp;guacamole.</span>
                            <span className="displayFont">coding&nbsp;fun.</span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default H1;


