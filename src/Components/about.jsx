import React, { Component } from "react";
import { HashRouter, NavLink as NavigationLink} from "react-router-dom";
import "../Css/styles.css";
import "../Css/yellow.css";
import FaIcon from "./icons";
import myImage from "../Resources/img/mySmallImg.jpg";

const GenerateList = (prop) => {
    return (
    <li>
        <span className="font-weight-700">{prop.dispKey} &nbsp; : &nbsp; </span>
        {prop.value}
    </li>
    )
}
class About extends Component {
    render () {
        let personalItems = [],
            personalItems2 = [];
        for(let [key, value] of Object.entries(personalDetails.personal)) {
            personalItems.push(<GenerateList key={key} dispKey={key} value={value}></GenerateList>)
        }
        for(let [key, value] of Object.entries(personalDetails.personal2)) {
            personalItems2.push(<GenerateList key={key} dispKey={key} value={value}></GenerateList>)
        }
        const resumeHeaders = resumeCardsTitles.map((title, index) => {
            let id = "resume-list-item-" + index;
            return (
                <div className="resume-list-item" key={title}  data-index={index} id={id} onClick={this.setActive}>
                    <div className="resume-list-item-inner">
                        <h6 className="resume-list-item-title uppercase">
                            <FaIcon key={title} value={title}/> &nbsp;
                            {title}
                        </h6>
                    </div>
                </div>
            )
        })
        const resumeCards = resumeCardsTitles.map((title, index) => {
            let resumeCardIndexCls = "resume-card resume-card-" + index;
            let resumeBodyClass = "resume-card-body " + title;
            return (
                <div className={resumeCardIndexCls} data-index={index} key={resumeCardIndexCls}  onClick={this.setActive}>
                    <div className="resume-card-header">
                        <div className="resume-card-name">
                            <FaIcon key={title} value={title} /> &nbsp; 
                            {title}
                        </div>
                    </div>
                    <div className={resumeBodyClass}>
                        <div className="resume-card-body-container">

                        </div>
                    </div>
                </div>
            )
        })
        return (
        <section id="About" className="active">
            <div className="container page-title custom-page-title">
                <h2 className="center-align">
                    <span>About</span>&nbsp; 
                    <span>Me</span>
                </h2>
            </div>
            <div className="container infos">
                <div className="divider center-align">
                    <span className="outer-line"></span> &nbsp;
                    <FaIcon key="user" value="About"></FaIcon> &nbsp;
                    <span className="outer-line"></span>
                </div>
                <div className="row">
                    <div className = "col s12 m4 profile-picture show-on-medium-and-down section-padding section-padding-right-none">
                        <img src={myImage} alt="myImage"></img>
                    </div>
                    <div className="col s12 m8 l12 xl12 personal-info section-padding">
                        <h6 className="uppercase">
                            <FaIcon key="user" value="About"></FaIcon> &nbsp;
                            Personal Info
                        </h6>
                        <div className="col m12 l12 xl9 p-none">
                            <p>about my self (self introduction)</p>
                        </div>
                        <div className="col s12 m12 l6 p-none">
                            <ul className="list-1">
                                {personalItems}
                            </ul>
                        </div>
                        <div className="col s12 m12 l6 p-none">
                            <ul className="list-2">
                                {personalItems2}
                            </ul>
                        </div>
                        <div className="col s12 m12 l12 p-none call-to-actions">
                            <HashRouter>
                                <div>
                                    <NavigationLink to="About" id="link-About" className="btn font-weight-700">
                                        <FaIcon key="Resume" value="Resume" /> &nbsp;
                                        My Resume
                                    </NavigationLink>
                                    <NavigationLink to="Blog" id="link-Blog" onClick={this.clickHandler} className="btn btn-secondary font-weight-700">
                                        <FaIcon key="Blog" value="Blog" /> &nbsp;
                                        My Blog
                                    </NavigationLink>
                                </div>
                            </HashRouter>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume-container">
                <div className="container section-padding">
                    <div className="valign-wrapper row">
                        <div className="resume-list col m5 l4 section-padding">
                            {resumeHeaders}
                        </div>
                        <div className="col s12 m7 l8 resume-cards-container section-padding">
                            <div className="resume-cards">
                                {resumeCards}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }

    componentDidMount () {
        document.getElementById("link-About").parentNode.className = "active";
        document.getElementById("resume-list-item-0").className += " is-active";
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

    setActive (e) {
        Array.from(document.getElementsByClassName("resume-list-item")).forEach(function(link) {
            link.className = "resume-list-item"
            if(link.id === e.currentTarget.id) {
                link.className = "resume-list-item is-active";
            }
        });
    }
}

const personalDetails = {
    personal: {
        firstName : "Anees Ur Rahiman",
        lastName : "Syed",
        DOB : "14 Aug",
        Nationality: "Indian",
    },
    personal2: {
        Phone: "+91 8553142373",
        address: "#26 RT Nagar, Bangalore",
        Email: "me@aneesrehman.com",
        Languages: "English, Hindi, Kannada"
    }
}

const resumeCardsTitles = ["experience", "education", "skills"];
export default About;