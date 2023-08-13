import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import { Navbar } from "../../components";

const Home = () => {
    return (
        <div>
            <Navbar />
            <hr />
            <Header />
            <AboutUs />
            <Intro />
            <Gallery />
            <hr />
            <Footer />
        </div>
    )
}

export default Home;