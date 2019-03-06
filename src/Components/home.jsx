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
                            I'm a &nbsp;
                            <span className="roles">
                                <b>{this.state.role}</b>
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
                                <NavigationLink  to="Work" id="link-Work" className="btn btn-secondary link-work">
                                    <FaIcon key="Work" value="Work"/>
                                    &nbsp;My Portfolio
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
        this.roleInterval = setInterval(() => {
            let role = this.state.roles[this.index];
            this.index = (this.index === this.state.roles.length - 1) ? 0 : this.index + 1; 
            this.setState(() => ({
                role: role
            }));
        }, 2000);
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
    componentWillUnmount () {
        clearInterval(this.roleInterval);
        this.roleInterval = null;
    }
}


export default Home;

