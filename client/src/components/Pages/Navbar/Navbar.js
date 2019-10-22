import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../assets/style/css/Navbar/navbar.min.css'
import {validateLogin} from "../../../store/actions";
import ConnectedWrapper from "./ConnectedWrapper";
import DisconnectedWrapper from "./DisconnectedWrapper";
import {Redirect} from "react-router";

class Navbar extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="navbar">
                {
                    this.props.isLogged && <Redirect to="/application"/>
                }
                {!this.props.isLogged ?
                    <DisconnectedWrapper login={this.props.login}/>
                    :
                    <ConnectedWrapper />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
});

const mapDispatchToProps = (dispatch) => {
    /*
    * TODO :
    *  - modify functions' actions
    *  - create all actions
    */
    return {
        login: (payload = {}) => dispatch(validateLogin(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
