import React, { Component, createRef } from "react";
import "../Css/styles.css";
import "../Css/yellow.css";
import './animateHeadline';
import './../Css/animateHeadline.css';

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
    }
    render (){
        return (
            <section id="Home" className="active">
                <div className="text-rotator-container">
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
    }
}

export default Home;

