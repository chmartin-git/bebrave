import React from 'react'

const Page2 = ({state, handler}) => (
    <div className={`front2 ${state}`}>
        <div id="home-content">
            Contenu de la page
        </div>
        <div className="back" onClick={handler}>
            <div className="container">
                <div className="text">
                    RETOUR
                </div>
            </div>
        </div>
    </div>
);

export default Page2
