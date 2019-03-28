import React, { Component, createRef } from "react";
import { HashRouter, NavLink as NavigationLink} from "react-router-dom";
import "../Css/styles.css";
import "../Css/yellow.css";
import FaIcon from "./icons";

class Home extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
        this.index = 0;
        this.state = {
            roles : [
                "developer",
                "designer",
                "freelancer"
            ],
            role : "developer"
        }
        this.roleInterval = null;
    }
    render (){
        return (
            <section id="Home" className="active">
                <div className="text-rotator-container">
                <div>
                    <div className="slider-text slider-triangle">
                        <h1>
                            HI ! i'm 
                            <span> Anees </span>
                        </h1>
                        <h2>
                            <span id="roles">
                                <b>I'm a &nbsp;{this.state.role}</b>
                                <span></span>
                            </span>
                        </h2>
                    </div>
                    <HashRouter>
                        <ul className="call-to-actions">
                            <li onClick={this.clickHandler}>
                                <NavigationLink  to="About" id="link-About" className="btn btn-secondary link-about">
                                    <FaIcon key="About" value="About"/>
                                    &nbsp;About Me
                                </NavigationLink>
                            </li>
                            <li onClick={this.clickHandler}>
                                <NavigationLink  to="Contact" id="link-Contact" className="btn btn-secondary link-work">
                                    <FaIcon key="Contact" value="Contact"/>
                                    &nbsp;Contact
                                </NavigationLink>
                            </li>
                        </ul>
                    </HashRouter>
                </div>
                    
                </div>
            </section>
        )
    }

    componentDidMount () {
        /*setInterval(() => {
            let role = this.state.roles[this.index];
            this.index = (this.index === this.state.roles.length - 1) ? 0 : this.index + 1; 
            this.setState(() => ({
                role: role
            }));
        }, 1000);*/
        let me = this,
            iterationCount = 0;

        document.querySelector("#roles > b").addEventListener("animationiteration", function (e) {
            iterationCount++;
            if (iterationCount%2 !== 0) {
                me.index = (me.index === me.state.roles.length - 1) ? 0 : me.index + 1;
                this.innerText = "I'm a " + me.state.roles[me.index];
            }
        }, false);
        document.getElementById("link-Home").parentNode.className = "active";
    }

    clickHandler (e) {
        var nav = document.getElementById("nav");
        nav.childNodes.forEach(element => {
            element.className = "";  
            if(e.target.id === element.firstChild.id) {
                element.className = "active";
            }         
        });
    }
    /*componentWillUnmount () {
        clearInterval(this.roleInterval);
        this.roleInterval = null;
    }*/
}


export default Home;

