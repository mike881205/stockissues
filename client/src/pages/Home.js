import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../components/Form";
import { DropdownList } from "react-widgets"
import { Container } from "../components/Grid";
import { Redirect } from 'react-router-dom'
import API from "../utils/API";
import "./home.css"
import MissingGarmentInfo from "../components/MissingGarmentInfo";
import ReceivedGarmentInfo from "../components/ReceivedGarmentInfo";

const issues = ["Missing Garments", "Extra Garments Received - Packing Slip is Correct, No Missing Garments"]
const reasons = ["Overage - Extra Sizes Received", "Overage - Wrong Sizes Received", "Wrong Brand Received", "Wrong Style Received", "Wrong Color Received", "Packing Slip is Correct - Missing Garments"]

class Home extends Component {

  state = {
    PONum: "",
    design: "",
    issue: "",
    reason: "",
    topInput: false,
    missingInput: false,
    receivedInput: false,
    missing: "",
    received: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value)

    if (name === "PONum") {
      let POVal = value.replace(/[^0-9]+/g, "")
      this.setState({ PONum: POVal.trim() });
    }
    else {
      this.setState({ [name]: value.trim() });
    }

    if (this.state.PONum.length === 5 && this.state.design && this.state.issue) {
      this.setState({ topInput: true })
    }
    else {
      this.setState({ topInput: false })
    }
  };

  issueDropDown = event => {
    console.log(event)
    switch (event) {
      case "Missing Garments":
        this.setState({ issue: event });
        break;
      case "Extra Garments Received - Packing Slip is Correct, No Missing Garments":
        this.setState({ issue: event });
        break;
    }
  }

  setMissingState = (missing) => {
    this.setState({ missing: missing })
  }

  setReceivedState = (received) => {
    this.setState({ missing: received })
  }

  reasonDropDown = event => {
    console.log(event)
    switch (event) {
      case "Overage - Extra Sizes Received":
        this.setState({ reason: event });
        break;
      case "Overage - Wrong Sizes Received":
        this.setState({ reason: event });
        break;
      case "Wrong Brand Received":
        this.setState({ reason: event });
        break;
      case "Wrong Style Received":
        this.setState({ reason: event });
        break;
      case "Wrong Color Received":
        this.setState({ reason: event });
        break;
    }
  }

  render() {
    return (
      <div className="container" align="center">
        <div className="jumbotron homeJumbo">
          <h1>Stock Issues</h1>
          <hr></hr>
          <form>
            <FormGroup>
              <Label text="PO Number" />
              <Input
                name="PONum"
                value={this.state.PONum}
                onChange={this.handleInputChange}
                maxLength={5}
              />
            </FormGroup>
            <FormGroup>
              <Label text="Design name" />
              <Input
                name="design"
                value={this.state.design}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label text="Issue" />
              <DropdownList
                name="issue"
                onChange={this.issueDropDown}
                data={issues}
              />
            </FormGroup>
            {
              this.state.issue === "Missing Garments"
                ?
                <div>
                  <h3>What is missing?</h3>
                  <hr></hr>
                  <MissingGarmentInfo
                    setMissingState={this.setMissingState}
                  />
                  <FormBtn
                    text="Next"
                    classes="btn-success logoutBtn homeBtn"
                  />
                </div>
                :
                ""
            }
            {
              this.state.issue === "Extra Garments Received - Packing Slip is Correct, No Missing Garments"
                ?
                <div>
                  <h3>What was Received?</h3>
                  <hr></hr>
                  <ReceivedGarmentInfo
                    setReceivedState={this.setReceivedState}
                  />
                  <FormBtn
                    text="Next"
                    classes="btn-success logoutBtn homeBtn"
                  />
                </div>
                :
                ""
            }
          </form>
        </div>
      </div>
    );
  }
}




export default Home;

{/* <FormGroup>
                    <Label text="Reason" />
                    <DropdownList
                      name="reason"
                      onChange={this.reasonDropDown}
                      data={reasons}
    
                    />
                  </FormGroup> */}
