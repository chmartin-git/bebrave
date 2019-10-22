import React, {Component} from 'react'
import LoginInputs from "./LoginInputs";
import {NavLink} from "react-router-dom";



class DisconnectedWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState(
                {
                    [e.name]: e.value
                }
        );
    }

    render() {
        return (
                <div className="disconnected-wrapper">
                    <LoginInputs changeHandler={this.handleChange}/>
                    <div className="button-inner">
                        <button className="button-login" onClick={() => this.props.login(this.state)}>
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
    }
}

export default DisconnectedWrapper;
