import React from 'react';
import {NavLink} from "react-router-dom";

import '../../../assets/style/css/navbar.min.css'
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
    return (
            <div className="navbar">
                <div className="logo-wrapper">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="button-wrapper">
                    <div className="button-inner">
                        <button className="button-login">
                            CONNEXION
                        </button>
                    </div>
                    <div className="button-inner">
                        <button className="button-signup">
                            <NavLink to='/signup' className="inner-link">INSCRIPTION</NavLink>
                        </button>
                    </div>
                </div>
            </div>
    )
};

export default Navbar;
