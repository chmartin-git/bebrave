import React from 'react'
import '../../../assets/style/css/Home/Page2.min.css'
import InfoZone from "./InfoZone";

const Page2 = ({state, handler}) => (
    <div className={`front2 ${state}`}>
        <div className="back" onClick={handler}>
            <div className="container">
                <div className="text">
                    RETOUR
                </div>
            </div>
        </div>
        <div className="home-content">
            <div className="home-band">
                <InfoZone left text={
                    "Un texte a gauche ! "
                } img />
                <InfoZone right text={
                    "Un texte a droite"
                } img />
                <InfoZone left text={
                    "Un texte a gauche * 2"
                } img />
            </div>
        </div>
    </div>
);

export default Page2
