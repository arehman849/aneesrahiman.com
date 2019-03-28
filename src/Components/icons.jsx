import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faBriefcase, faComment, faEnvelopeOpen, faGraduationCap, faStar, faCalendar, faStarHalf, faHandshake, faHeart, faPhone, faAddressCard, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faSkype, faStackOverflow, faGoogle, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHome, faUser, faBriefcase, faComment, faEnvelopeOpen, faFilePdf, faGraduationCap, faStar, faCalendar, faStarHalf, faHandshake, faHeart, faPhone, faGithub, faLinkedin, faSkype, faStackOverflow, faAddressCard, faGoogle, faFacebook, faTwitter, faPaperPlane);

const FaIcon = (prop) => {
    return (
        <FontAwesomeIcon icon={getIcon(prop.value)} />
    )    
}

const getIcon = (item) => {
    let icon;
    switch (item) {
        case "Home":
            icon = "home"
            break;
        case "About":
        case "name":
            icon = "user"
            break;
        case "Work":
        case "experience":
            icon = "briefcase"
            break;
        case "Blog":
        case "comment":
            icon = "comment"
            break;
        case "Contact":
            icon = "envelope-open"
            break;
        case "Resume":
            icon = {prefix: 'far', iconName: 'file-pdf'}
            break;
        case "education":
            icon = "graduation-cap"
            break;
        case "skills":
        case "star":
            icon = "star"
            break;
        case "halfStar":
            icon = "star-half"
            break;
        case "calendar":
            icon = "calendar"
            break;
        case "projects":
            icon = "handshake"
            break;
        case "customers":
            icon = "heart"
            break;
        case "phone":
            icon = "phone"
            break;
        case "email":
            icon = "address-card"
            break;
        case "skype":
            icon = {prefix: 'fab', iconName: 'skype'}
            break;
        case "google":
            icon = {prefix: 'fab', iconName: 'google'}
            break; 
        case "gitHub":
            icon = {prefix: 'fab', iconName: 'github'}
            break; 
        case "stackoverflow":
            icon = {prefix: 'fab', iconName: 'stack-overflow'}
            break; 
        case "facebook":
            icon = {prefix: 'fab', iconName: 'facebook'}
            break; 
        case "linkedIn":
            icon = {prefix: 'fab', iconName: 'linkedin'}
            break; 
        case "twitter":
            icon = {prefix: 'fab', iconName: 'twitter'}
            break;
        case "send":
            icon = 'paper-plane'
            break;
        default:
            break;
    }
    return icon;
}
export default FaIcon;