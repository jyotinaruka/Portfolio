import React from 'react'
import Typed from "react-typed";
import "../libs/stars.scss";
import { Button } from 'semantic-ui-react';

const Intro = () => {
    return (
        <section id="intro" className="intro route bg-image background m-nav">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />

            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="intro-title mb-4">Jyoti Singh</h1>
                        <p className="intro-subtitle">
                            <span className="text-slider-items"></span>
                            <strong className="text-slider">
                                <Typed
                                    strings={[
                                            "Full Stack Developer ",
                                            "Front End Developer",
                                            "Web Developer",
                                            "Software Engineer"
                                    ]}
                                    typeSpeed={80}
                                    backDelay={1100}
                                    backSpeed={30}
                                    loop
                                />
                            </strong>
                        </p>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Intro
