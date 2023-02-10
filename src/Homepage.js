import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import "./App.css";

function Homepage() {
    return (
        <div className="start">
            <Header/>
            <Banner/>
        </div>
    )
}

export default Homepage;