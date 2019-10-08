import React from 'react';
import Navbar from "./Navbar/Navbar";
import Main from "./Main";
import '../../../assets/style/css/Home/home.min.css'

const Home = () => {
    return (
        <main className="home">
            <Navbar />
            <Main title="BEBRAVE"/>
        </main>
    )
};

export default Home
