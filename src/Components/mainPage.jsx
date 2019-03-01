import React, { Component } from "react";
import "../Css/styles.css";
import "../Css/yellow.css";
import Home from "./home";

class Main extends Component {
    render (){
    return (
        <main id="main" className="open">
            <Home />
        </main>
    )
    }
}

export default Main;