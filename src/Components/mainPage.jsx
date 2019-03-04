import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../Css/styles.css";
import "../Css/yellow.css";
import Home from "./home";
import Work from './work';
import About from './about';
import Blog from './blog';
import Contact from './contact';

class Main extends Component {
    render (){
    return (
        <main id="main" className="open">
            <Route exact path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Work" component={Work}/>
            <Route path="/About" component={About}/>
            <Route path="/Blog" component={Blog}/>
            <Route path="/Contact" component={Contact}/>
        </main>
    )
    }
}

export default Main;