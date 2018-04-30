import React, { Component } from 'react';
import emojis from 'emojis-list';
import '../App.css';


class H1 extends Component {
    render() {
        return (
            <div className="margin-neg m-5 pt-5 mainH1 d-flex justify-content-center flex-column">
                <h1 className="ml-words yellow">{emojis[775]}&nbsp;Hey, it's Lindsay!</h1>
                <div className="d-flex flex-row justify-content-start ml-words">
                    <h1 className="yellow">I Make:</h1>
                    <div className="">
                        <h1 className="animated-words">
                            <span className="yellow">Fun&nbsp;Websites.</span>
                            <span className="yellow">Thoughtful&nbsp;UI&nbsp;Design.</span>
                            <span className="yellow">Inovative&nbsp;User&nbsp;Experiences.</span>
                            <span className="yellow">An&nbsp;Awesome&nbsp;Dance&nbsp;Party.</span>
                            <span className="yellow">Decent&nbsp;Guacamole.</span>
                            <span className="yellow">Coding&nbsp;Fun.</span>
                        </h1>
                    </div>
                </div>
                <h1 className="ml-words yellow">&nbsp;</h1>                
            </div>
        );
    }
}

export default H1;


