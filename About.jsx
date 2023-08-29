import React from "react";
import ReactDOM from "react-dom";

function About(props) {
    return (

        <div id="about">
            <div className="about-image">
                <img src= {props.image} alt="pic" />
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p>Here we are provding you all that thing which you needed to using AI.
                    Here we are provding you all that thing which you needed to using AI.
                    Here we are provding you all that thing which you needed to using AI.
                    Here we are provding you all that thing which you needed to using AI.
                </p>
                <button> {props.button} </button>
            </div>
        </div>

    )
}

export default About;