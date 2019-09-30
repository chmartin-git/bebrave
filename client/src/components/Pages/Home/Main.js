import React from 'react';
import '../../../assets/style/css/main.min.css'

function Main({title}){
    return (
            <div id="main">
                <div className="main-title">
                    {title}
                </div>
            </div>
    )
}

export default Main
