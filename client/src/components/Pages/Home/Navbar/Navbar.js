import React from 'react';
import {NavLink} from "react-router-dom";

import '../../../../assets/style/css/Home/navbar.min.css'
const Navbar = () => {
    return (
            <div className="navbar">

                <div className="button-wrapper">
                    <div className="input-inner">
                        <div className="input-wrapper">
                            <input type="text" name="pseudo" id="pseudo" placeholder=" IDENTIFIANT "/>
                        </div>
                        <div className="input-wrapper">
                            <input type="password" name="password" id="password" placeholder=" MOT DE PASSE "/>
                        </div>
                    </div>
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
