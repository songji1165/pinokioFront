import React from 'react';
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import HomeSection from "../components/Home/HomeSection";

function Home() {

    return (
            <div className="Home">
                <Header/>
                <HomeSection/>
                <Footer/>
            </div>
    );
}

export default Home