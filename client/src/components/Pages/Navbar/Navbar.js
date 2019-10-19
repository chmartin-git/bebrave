import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

import { connect } from 'react-redux';

import '../../../assets/style/css/navbar.min.css'

class Navbar extends Component {
    render(){
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
                            {
                                !this.props.isLogged ?
                                <button className="button-login">
                                    CONNEXION
                                </button> :
                                <button className="button-logout">
                                    DECONNEXION
                                </button>
                            }
                        </div>
                        <div className="button-inner">
                            <button className="button-signup">
                                <NavLink to='/signup' className="inner-link">INSCRIPTION</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
});

export default connect(mapStateToProps)(Navbar);
