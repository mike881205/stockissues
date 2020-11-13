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
    missing: {
      brand: "",
      style: "",
      color: "",
      xSmall: 0,
      small: 0,
      medium: 0,
      large: 0,
      xLarge: 0,
      twoXL: 0,
      threeXL: 0,
      fourXL: 0,
      fiveXL: 0,
      hats: 0
    },
    received: {
      brand: "",
      style: "",
      color: "",
      xSmall: 0,
      small: 0,
      medium: 0,
      large: 0,
      xLarge: 0,
      twoXL: 0,
      threeXL: 0,
      fourXL: 0,
      fiveXL: 0,
      hats: 0
    },
    POInfo: false,
    missingInfo: false,
    receivedInfo: false
  }

  handleInputChange = event => {

    const { name, value } = event.target;

    let numVal = parseInt(value)

    let issue = this.state.issue

    switch (name) {
      case "PONum":
        let POVal = value.replace(/[^0-9]+/g, "")
        this.setState({ PONum: POVal.trim() });
        break;
      case "design":
        this.setState({ design: value.trim() });
        break;
      case "brand":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.brand = value.trim()
          return { missing }
        })
        break;
      case "style":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.style = value.trim()
          return { missing }
        })
        break;
      case "color":
        let colorVal = value.replace(/[^a-zA-Z ]/g, "")
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.color = colorVal.trim()
          return { missing }
        })
        break;
      case "xSmall":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.xSmall = numVal
          return { missing }
        })
        break;
      case "small":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.small = numVal
          return { missing }
        })
        break;
      case "medium":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.medium = numVal
          return { missing }
        })
        break;
      case "large":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.large = numVal
          return { missing }
        })
        break;
      case "xLarge":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.xLarge = numVal
          return { missing }
        })
        break;
      case "twoXL":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.twoXL = numVal
          return { missing }
        })
        break;
      case "threeXL":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.threeXL = numVal
          return { missing }
        })
        break;
      case "fourXL":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.fourXL = numVal
          return { missing }
        })
        break;
      case "fiveXL":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.fiveXL = numVal
          return { missing }
        })
        break;
      case "hats":
        this.setState(prevState => {
          let missing = Object.assign({}, prevState.missing);
          missing.hats = numVal
          return { missing }
        })
        break;
    }

    switch (issue) {

    }
  };

  dropDownChange = event => {
    console.log(event)
    switch (event) {
      case "Missing Garments":
        this.setState({ issue: event });
        break;
      case "Extra Garments Received - Packing Slip is Correct, No Missing Garments":
        this.setState({ issue: event });
        break;
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
                onChange={this.dropDownChange}
                data={issues}
              />
            </FormGroup>
            {
              this.state.issue === "Missing Garments" ?
                !this.state.reason ?
                  <FormGroup>
                    <Label text="Reason" />
                    <DropdownList
                      name="reason"
                      onChange={this.dropDownChange}
                      data={reasons}
                    />
                  </FormGroup>
                  :
                  <div>
                    <FormGroup>
                      <Label text="Reason" />
                      <DropdownList
                        name="reason"
                        onChange={this.dropDownChange}
                        data={reasons}
                        value={this.state.reason}
                      />
                    </FormGroup>
                    <h3>What is missing?</h3>
                    <hr></hr>
                    <MissingGarmentInfo
                      handleInputChange={this.handleInputChange}
                      brand={this.state.missing.brand}
                      style={this.state.missing.style}
                      color={this.state.missing.color}
                      xSmall={this.state.missing.xSmall}
                      small={this.state.missing.small}
                      medium={this.state.missing.medium}
                      large={this.state.missing.large}
                      xLarge={this.state.missing.xLarge}
                      twoXL={this.state.missing.twoXL}
                      threeXL={this.state.missing.threeXL}
                      fourXL={this.state.missing.fourXL}
                      fiveXL={this.state.missing.fiveXL}
                      hats={this.state.missing.hats}
                    />
                    <FormBtn
                      text="Next"
                      classes="btn-success logoutBtn homeBtn"
                      // disabled={(!this.state.PONum || !this.state.design || !this.state.issue || !this.state.missing.brand || !this.state.missing.style || !this.state.missing.color) && (this.state.missing.xSmall === 0 && this.state.missing.small === 0 && this.state.missing.medium === 0 && this.state.missing.large === 0 && this.state.missing.xLarge === 0 && this.state.missing.twoXL === 0 && this.state.missing.threeXL === 0 && this.state.missing.fourXL === 0 && this.state.missing.fiveXL === 0) ? "" : "disabled"}
                      disabled={true}
                    />
                  </div>
                :
                ""
            }
            {
              this.state.issue === "Extra Garments Received - Packing Slip is Correct, No Missing Garments" ?
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
