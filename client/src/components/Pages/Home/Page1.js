import React from 'react'
import Particles from "react-particles-js";
import iconMore from "../../../assets/images/more.svg";

const particles = {
    particles:
            {
                number: {value: 80, density: {enable: true, value_area: 800}},
                color: {value: "#ffffff"},
                shape: {
                    type: "circle",
                    stroke: {width: 0, color: "#000000"},
                    polygon: {nb_sides: 5},
                    image: {src: "", width: 0, height: 0}
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {enable: false, speed: 1, opacity_min: 0.1, sync: false}
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {enable: false, speed: 40, size_min: 0.1, sync: false}
                },
                line_linked: {enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {enable: false, rotateX: 600, rotateY: 1200}
                }
            },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {enable: true, mode: "bubble"},
            onclick: {enable: true, mode: "repulse"},
            resize: true
        },
        modes: {
            grab: {distance: 400, line_linked: {opacity: 0.4}},
            bubble: {distance: 200, size: 10, duration: 2, opacity: 5, speed: 3},
            repulse: {distance: 100, duration: 0.4},
            push: {particles_nb: 4},
            remove: {particles_nb: 2}
        }
    },
    retina_detect: true
};

const Page1 = ({state, title, handler}) => (
        <div className={`front1 ${state}`}>
            <Particles className="particles" width={window.outerWidth + "px"}
                       height={window.outerHeight + "px"} params={particles}/>
            <div className="main-title">
                {title}
            </div>
            <div className="more" onClick={handler}>
                <div className="container">
                    <div className="text">
                        PLUS D'INFORMATIONS
                    </div>
                    <div className="logo">
                        <img src={iconMore} alt="more button"/>
                    </div>
                </div>
            </div>
        </div>
);

export default Page1
