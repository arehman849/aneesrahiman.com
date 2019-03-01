import React, { Component } from "react";
import "../Css/styles.css";
import "../Css/yellow.css";
import FaIcon from "./icons";


const GenerateLink = (prop) => {
    return (
        <li onClick={()=>prop.onClickHandler(prop.value)} className={prop.liCls}>
            <a id={"link-" + prop.value} href={"#" + prop.value}>
                <FaIcon key={prop.value} value={prop.value} />
                <span className="mobile-nav font-weight-700" >{prop.value}</span>
            </a>
            <span>
                {prop.value}
            </span>
        </li>
    );
};

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
        const { links } = props;
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