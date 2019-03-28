import React, { Component } from "react";
import "../Css/styles.css";
import "../Css/yellow.css";
import FaIcon from "./icons";
import axios from 'axios'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          mailSent: false,
          error:''
        }
      }
    handleFormSubmit (event) {
        let { name, email, message } = this.state;
        event.preventDefault();
        if (name && email && message) {    
            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: this.state
              })
                .then(result => {
                  this.setState({
                    mailSent: result.data.sent
                  })
                  if(this.state.mailSent) {
                    document.getElementsByClassName("output_message")[0].className += " success";
                    document.getElementsByClassName("output_message")[0].textContent = "Mail Sent Successfully";
                  }
                })
                .catch(error => this.setState({ error: error.message }));
        } else {
            document.getElementsByClassName("output_message")[0].className += " error";
            document.getElementsByClassName("output_message")[0].textContent = "all fields are required";
        }
    }
    render () {
        const contactDetails = Object.keys(contacts).map((key) => {
            if (typeof contacts[key] === "string") {
                return (
                    <React.Fragment key={key}>
                        <h6 className="font-weight-700 uppercase">
                            {key}
                        </h6>
                        <span className="font-weight-400">
                            <FaIcon key={key} value={key}></FaIcon> &nbsp;
                            {contacts[key]}
                        </span>
                    </React.Fragment>
                    
                )
            } else {
                let socialList = Object.entries(contacts[key]).map((link) => {
                    return (
                        <li className={link[0]} key={link[0]}>
                            <a href={link[1]} target="_blank" rel="noopener noreferrer">
                                <FaIcon key={link[0]} value={link[0]}></FaIcon>
                            </a>
                        </li>
                    )
                })
                return (
                    <React.Fragment key={key}>
                        <h6 className="font-weight-700 uppercase">
                            {key}
                        </h6>
                        <div className="social">
                            <ul className="list-inline social social-intro center-align p-none">
                                {socialList}
                            </ul>
                        </div>
                    </React.Fragment>
                )
            }
            
        }) 
        return (
            <section id="Contact" className="active">
                <div className="contact-container">
                    <div className="container page-title center-align">
                        <h2 className="center-align"> 
                            <span data-hover="get">get &nbsp;</span> 
                            <span data-hover="in touch">in touch</span>
                        </h2>
                    </div>
                    <div className="container">
                        <div className="divider center-align">
                            <span className="outer-line"> </span> &nbsp;
                            <FaIcon key="Contact" value="Contact" /> &nbsp;
                            <span className="outer-line"> </span>
                        </div>
                        <div className="row contact section-padding">
                            <div className="col s12 m5 l5 xl4 leftside">
                                {contactDetails}
                            </div>
                            <div className="col s12 m7 l7 xl8 rightside">
                                <h6 className="uppercase m-none font-weight-700">
                                    Feel free to drop me a line
                                </h6>
                                <div className="row">
                                    <p className="col s12 m12 l12 xl10">
                                        If you have any suggestion, project or even you want to say Hello.. Please fill out the form below and I will reply you shortly.
                                    </p>
                                </div>
                                <form className="contactform" method="post" action="#">
                                    <div className="input-field">
                                        <FaIcon key="name" value="name" className="prefix"/>
                                        <input id="name" name="name" type="text" className="validate" required value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
                                        <label htmlFor="name" className="active font-weight-400">Your Name</label>
                                    </div>
                                    <div className="input-field">                                                <FaIcon key="email" value="Contact" className="prefix"/>
                                        <input id="email" type="email" name="email" className="validate" required value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                                        <label htmlFor="email" className="active font-weight-400">Your Email</label>
                                    </div>
                                    <div className="input-field">
                                        <FaIcon key="comments" value="comment" className="prefix"/>
                                        <textarea id="comment" name="comment" className="materialize-textarea" required value={this.state.message} onChange={e => this.setState({ message: e.target.value })}></textarea>
                                        <label htmlFor="comment" className="active font-weight-400">Your Comment</label>
                                    </div>
                                    <div className="submit-form">
                                        <button className="btn font-weight-700" type="submit" name="send" onClick={e => this.handleFormSubmit(e)}>
                                            <FaIcon key="send" value="send" />
                                            <i className="fa fa-send"></i> Send Message
                                        </button>
                                    </div>
                                    <div className="form-message">
                                        <span className="output_message center-align font-weight-700 uppercase"></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const contacts = {
    phone: "+91 85531 42373",
    email: "me@aneesrehman.com",
    skype: "arehman849_1",
    social: {
        gitHub: "https://github.com/arehman849",
        stackoverflow: "https://stackoverflow.com/users/10857986/anees-rehman",
        linkedIn: "https://www.linkedin.com/in/anees-rehman-2611a596/",
        google: "https://plus.google.com/u/0/109488411173212519866",
        facebook: "https://www.facebook.com/anees.rehman.7528",
        twitter: "https://twitter.com/arehman17"
    }
};

const API_PATH = 'https://aneesrehman.com/api/contact/sendMail.php';


export default Contact;