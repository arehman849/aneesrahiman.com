import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faBriefcase, faComment, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHome, faUser, faBriefcase, faComment, faEnvelopeOpen);

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

export default FaIcon;