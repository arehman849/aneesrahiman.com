import React, { Component, createRef } from "react";
import "../Css/styles.css";
import "../Css/yellow.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const GenerateRoles = (prop) => {
    return (
        <b className={prop.bClass}>{prop.roles}</b>
    )
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
        this.next = 0;
        this.state = {
            roles : [
                "developer",
                "designer",
                "freelancer"
            ]
        }
    }
    render (){
        const roleItems = this.state.roles.map((role, index) => {
            return <GenerateRoles key={role} roles={role} />
        });
        return (
            <section id="home" className="active">
                <div className="text-rotator-container">
                    <div className="slider-text slider-triangle">
                        <h1>
                            HI ! i'm 
                            <span> Anees</span>
                        </h1>
                        <h2 className="cd-headline clip" >
                            I'm a
                            <ReactCSSTransitionGroup>
                                {roleItems}
                            </ReactCSSTransitionGroup>
                        </h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;

