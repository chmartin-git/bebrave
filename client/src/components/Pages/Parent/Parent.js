import React, {Component} from 'react';
import '../../../assets/style/css/Parent/Parent.min.css'
import Navbar from  "../Navbar/Navbar.js"
class Parent extends Component {
    render() {
        return (
            <div id="parent">
                <Navbar />
            </div>
        );
    }
}

export default Parent;
