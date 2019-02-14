import React, { Component } from "react";
import "../Css/styles.css";
import "../Css/yellow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faBriefcase, faComment, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUser, faBriefcase, faComment, faEnvelopeOpen);

const GenerateLink = (prop) => {
    return (
        <li onClick={()=>prop.onClickHandler(prop.value)} className={prop.liCls}>
            <a id={"link-" + prop.value} href={"#" + prop.value}>
                <FontAwesomeIcon icon={getIcon(prop.value)} />
                <span className="mobile-nav font-weight-700" >{prop.value}</span>
            </a>
            <span>
                {prop.value}
            </span>
        </li>
    );
};

const getIcon = (item) => {
    let icon;
    switch (item) {
        case "Home":
            icon = "home"
            break;
        case "About":
            icon = "user"
            break;
        case "Work":
            icon = "briefcase"
            break;
        case "Blog":
            icon = "comment"
            break;
        case "Contact":
            icon = "envelope-open"
            break;
        default:
            break;
    }
    return icon;
}

class NavLink extends Component {
    constructor() {
        super();
        this.state = {
            activeLiId : 'Home'
        }
    }
    setClass = (val) => {
        this.setState({activeLiId : val});
    }
    render() {
        let { props } = this;
        const links = props.links;
        const linkItems = links.map((link) => {
            let liCls = (this.state.activeLiId === link) ? 'active' : '';
            return <GenerateLink key={link} value={link} onClickHandler={this.setClass} liCls={liCls}/>
        }
            
        );
        return (
            <div>
                <ul className="navigation" id="nav">
                    {linkItems}
                </ul>
            </div>
        );
        
    }
}


export default NavLink;