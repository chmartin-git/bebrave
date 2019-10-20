import React from 'react'
import LoginInputs from "./LoginInputs";
import {NavLink} from "react-router-dom";

const DisconnectedWrapper = (props) => (
        <div className="disconnected-wrapper">
            <LoginInputs />
            <div className="button-inner">
                <button className="button-login" onClick={props.login}>
                    CONNEXION
                </button>
            </div>
            <div className="button-inner">
                <button className="button-signup">
                    <NavLink to='/signup' className="inner-link">INSCRIPTION</NavLink>
                </button>
            </div>
        </div>
);

export default DisconnectedWrapper
