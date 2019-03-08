import React, { Component } from "react";
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
                    </div>
                </div>
            </div>
        </section>
        )
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
export default About;