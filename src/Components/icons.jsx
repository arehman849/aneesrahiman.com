import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faBriefcase, faComment, faEnvelopeOpen, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHome, faUser, faBriefcase, faComment, faEnvelopeOpen, faFilePdf, faGraduationCap, faStar);

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
            icon = "user"
            break;
        case "Work":
        case "experience":
            icon = "briefcase"
            break;
        case "Blog":
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
            icon = "star"
            break;
        default:
            break;
    }
    return icon;
}

export default FaIcon;