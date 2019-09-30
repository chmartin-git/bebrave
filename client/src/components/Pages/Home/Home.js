import React from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import '../../../assets/style/css/home.min.css'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Main title="BEBRAVE"/>
        </div>
    )
};

export default Home
