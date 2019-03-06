import React, { Component } from "react";
import { HashRouter, NavLink as NavigationLink} from "react-router-dom";
import "../Css/styles.css";
import "../Css/yellow.css";
import FaIcon from "./icons";


const GenerateLink = (prop) => {
    return (
        <li onClick={()=>prop.onClickHandler(prop.value)} className={prop.liCls}>
            <NavigationLink id={"link-" + prop.value} to={prop.value}>
                <FaIcon key={prop.value} value={prop.value} />
                <span className="mobile-nav font-weight-700" >{prop.value}</span>
            </NavigationLink>
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
            activeLiId : ''
        }
    }
    setClass = (val) => {
        var nav = document.getElementById("nav");
        nav.childNodes.forEach(element => {
            element.className = "";          
        });
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
                <HashRouter>
                    <ul className="navigation" id="nav">
                        {linkItems}
                    </ul>
                </HashRouter>
                
            </div>
        );
        
    }
    componentDidMount() {
        this.setClass(document.getElementsByTagName("section")[0].id);
    }
}


export default NavLink;   