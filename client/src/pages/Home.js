import React, { Component } from "react";
import { FormBtn } from "../components/Form";
import { Link } from 'react-router-dom'
import "./home.css"

class Home extends Component {

  render() {
    return (
      <div className="container" align="center">
        <div className="jumbotron homeJumbo">
          <h1>Welcome!</h1>
          <hr></hr>
          <ul className="homeUL text-left">
            <li>To begin a new assessment, click "New Assessment"</li>
            <li>To view a list of clients who have completed assessments, click "View Clients"</li>
          </ul>
          <hr></hr>
          <div className="row">
            <div className="col-sm">
              <Link to="/clientinput">
                <button type="button" className="btn btn-outline-success homeBtn">New Assessment</button>
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/clients">
                <button type="button" className="btn btn-outline-success homeBtn" >View Clients</button>
              </Link>
            </div>
          </div>
          <FormBtn
            text="Logout"
            onClick={this.logout}
            classes="btn-outline-success logoutBtn homeBtn"
          />
        </div>
      </div>
    );
  }
}




export default Home;
