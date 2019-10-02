import React from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import '../../../assets/style/css/home.min.css'

const Home = () => {
    return (
        <main className="home">
            <Navbar />
            <Main title="BEBRAVE"/>
        </main>
    )
};

export default Home
