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

const GetContent = (props) => {
    let { value } = props
    if (value === "skills") {
        return (
            <div className="row">
                <div className="col s6">
                    {getCol1Values}
                </div>
                <div className="col s6">
                    {getCol2Values}
                </div>
            </div>
        )
    } else {
        return (
            expEduDetails[value].map((dets) => {
                return (
                    <React.Fragment key={dets.data1}>
                        <div className="resume-content" key={value}>
                            <h6 className="uppercase">
                                <span>{dets.data1}</span>
                                {dets.data2}
                            </h6>
                            <span className="date">
                                <FaIcon key="calendar" value="calendar"/> &nbsp;
                                {dets.data3}
                            </span>
                            <p>
                                {dets.data4}
                            </p>
                        </div>
                        <span className="separator" key="separator"></span>
                    </React.Fragment>
                )
            })
            
        )
    }
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
                            <GetContent key={title} value={title} />
                        </div>
                    </div>
                </div>
            )
        })
        const generateStatsBadges = statsBadges.map((badge) => {
            let key = Object.keys(badge)[0];
            return (
                <div className="col s12 m4 l4 center-align" key = {key}>
                    <h3>
                        <FaIcon key={key} value={key}></FaIcon><br />
                        <span className="font-weight-900">{badge[key][0]}</span>
                    </h3>
                    <h6 className="uppercase font-weight-700">{badge[key][1]}</h6>
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
                                    <NavigationLink to="Contact" id="link-Contact" onClick={this.clickHandler} className="btn btn-secondary font-weight-700">
                                        <FaIcon key="Contact" value="Contact" /> &nbsp;
                                        Contact
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
            <div className="container badges">
                <div className="row">
                    {generateStatsBadges}
                </div>
            </div>
        </section>
        )
    }

    componentDidMount () {
        document.getElementById("link-About").parentNode.className = "active";
        document.getElementById("resume-list-item-0").className += " is-active";
        document.getElementsByClassName("resume-card-0")[0].className += " front";
        document.getElementsByClassName("resume-card-1")[0].className += " back";
        document.getElementsByClassName("resume-card-2")[0].className += " back-back";
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
        let activeLink = 0;
        Array.from(document.getElementsByClassName("resume-list-item")).forEach((link, index) => {
            link.className = "resume-list-item";
            if(link.id === e.currentTarget.id || 
                e.currentTarget.attributes.getNamedItem('data-index').value === link.attributes.getNamedItem("data-index").value) {
                activeLink = index;
                link.className += " is-active";
            }
        });

        Array.from(document.getElementsByClassName("resume-card")).forEach((link, index) => {
            link.className = "resume-card resume-card-" + index; 
        })

            switch (activeLink) {
                case 0:
                    document.getElementsByClassName("resume-card-0")[0].className += " front";
                    document.getElementsByClassName("resume-card-1")[0].className += " back";
                    document.getElementsByClassName("resume-card-2")[0].className += " back-back";
                    break;
                case 1:
                    document.getElementsByClassName("resume-card-0")[0].className += " back-back";
                    document.getElementsByClassName("resume-card-1")[0].className += " front";
                    document.getElementsByClassName("resume-card-2")[0].className += " back";
                    break;
                case 2:
                    document.getElementsByClassName("resume-card-0")[0].className += " back";
                    document.getElementsByClassName("resume-card-1")[0].className += " back-back";
                    document.getElementsByClassName("resume-card-2")[0].className += " front";
                    break;
                default:
                    document.getElementsByClassName("resume-card-0")[0].className += " front";
                    document.getElementsByClassName("resume-card-1")[0].className += " back";
                    document.getElementsByClassName("resume-card-2")[0].className += " back-back";
                    break;
            }

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
const statsBadges = [{experience:["1+", "Years Experience"] }, {projects: ["6+", "Done Projects"]}, {customers: ["5+", "Happy Customers"]}];
const expEduDetails = {
    experience : [
        {
            data1 : "NagraVision -",
            data2 : " Software Trainee",
            data3: "Nov 2017 - present",
            data4:"one line explanation"
        },
        {
            data1 : "AM Solutions -",
            data2 : " Freelancer",
            data3: "June 2017 - present",
            data4:"one line explanation"
        }
    ],
    education : [
        {
            data1: "MCA - ",
            data2 : "IGNOU",
            data3: "Jan 2018 - present",
            data4: "Computer Science"
        },
        {
            data1: "BCA - ",
            data2 : "Bangalore University",
            data3: "May 2014 - June 2017",
            data4: "Computer Science"
        }
        // {
        //     data1: "PUC - ",
        //     data2 : "KSEEB",
        //     data3: "May 2013 - March 2014",
        //     data4: "Maths, Economics, Business, Accounts"
        // }
        
    ]
}

const col1Data = {
    Javascript: 4,
    Html: 4,
    PHP: 3.5,
    Jquery: 4  
}
const col2Data = {
    Javascript: 4,
    Html: 4,
    PHP: 3.5,
    Jquery: 4  
}
const getIcon = (val) => {
    let floorVal = parseInt(val);
    let starIcons = [];
    let rem = val - floorVal;
    for (var i = 1; i <= floorVal; i++) {
        let key = "star" + i;
        starIcons.push(<FaIcon key={key} value="star"/>)
    }
    if (rem) {
        starIcons.push(<FaIcon key="halfStar" value="halfStar"/>)
    }
    return starIcons;
}
let keys = Object.keys(col1Data),
    keys2 = Object.keys(col2Data);
const getCol1Values = keys.map((key)=> {
    return (
        <div className="resume-content" key={key}>
            <h6 className="uppercase">
                {key}
            </h6>
            <p>
                {getIcon(col1Data[key])}
            </p>
        </div>
    )
})
const getCol2Values = keys2.map((key)=> {
    return (
        <div className="resume-content" key={key}>
            <h6 className="uppercase">
                {key}
            </h6>
            <p>
                {getIcon(col1Data[key])}
            </p>
        </div>
    )
})
export default About;