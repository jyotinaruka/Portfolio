import React from 'react'
import Particles from "react-tsparticles";
import { Segment, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';

const Contact = () => {
    const particleOptions = {
        background: {
            color: {
                value: "#0d47a2",
            },
        },
        fpsLimit: 60,
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },

        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "width": 100,
                    "height": 100
                }
            },
            size: {
                random: true,
                value: 5,
            },
        },
        detectRetina: true,
    };
    const particleOptions2 = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 176.37479644244019,
                color: "#ffffff",
                opacity: 0.2805962670675185,
                width: 1.4430665163472378
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 400.851810096455,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };

    return (
        <section id="contact" className="contact position-rel m-nav">
            <Particles id="tsparticles" options={particleOptions2} canvasClassName="contact-bg" />
            <Header className="m-c" size='huge' inverted textAlign='center'>
                <u>Contact</u>
            </Header>

            <Grid>
                <GridColumn>
                    <Segment>
                        <h3>Email</h3>
                        <h3>call</h3>


                    </Segment>
                </GridColumn>

                <GridColumn>
                    <Segment>

                    </Segment>


                </GridColumn>

            </Grid>





        </section>
    )
}

export default Contact
