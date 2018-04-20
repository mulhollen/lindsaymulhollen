import React, { Component } from 'react';
import emojis from 'emojis-list';
import '../App.css';


class H1 extends Component {
    render() {
        return (
            <div className="m-5 pt-5 bodyWidth mainH1 d-flex justify-content-center flex-column">
                <h1 className="text-center">{emojis[775]}&nbsp;Hey, it's Lindsay + I Make</h1>
                <div className="ml-5 pb-5">
                    {/* <h1 className="display-4">+ I Make&nbsp;</h1> */}
                    <h1 className="animated-words">
                        <span>Fun&nbsp;Websites.</span>
                        <span>Thoughtful&nbsp;&nbsp;UI&nbsp;Design.</span>
                        <span>Inovative&nbsp;&nbsp;User&nbsp;Experiences.</span>
                        <span>An&nbsp;Awesome&nbsp;Dance&nbsp;Party.</span>
                        <span>Decent&nbsp;Guacamole.</span>
                        <span>Coding&nbsp;Fun.</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default H1;


