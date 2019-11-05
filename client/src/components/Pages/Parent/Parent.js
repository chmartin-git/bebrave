import React, { Component } from "react";
import "../../../assets/style/css/Parent/Parent.min.css";
import Navbar from "../Navbar/Navbar.js";
import AppContent from "./AppContent";

class Parent extends Component {
    render() {
        return (
            <div id="parent">
                <Navbar />
                <AppContent />
            </div>
        );
    }
}

export default Parent;
