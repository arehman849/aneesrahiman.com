import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import { } from "react-bootstrap";
import "./Css/materialize.min.css";
import Header from "./Components/header";
import Main from "./Components/mainPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header className="d" id="header"/>
        <HashRouter>
        <Main />
        </HashRouter>

      </React.Fragment>
    );
  }
}

export default App;
