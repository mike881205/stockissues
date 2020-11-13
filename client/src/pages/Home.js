import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../components/Form";
import { DropdownList } from "react-widgets"
import { Container } from "../components/Grid";
import { Redirect } from 'react-router-dom'
import API from "../utils/API";
import "./home.css"
import GarmentInfo from "../components/GarmentInfo";

const issues = ["Missing Garments", "Extra Garments Received - Packing Slip is Correct, No Missing Garments"]
const reasons = ["Overage - Extra Sizes Received", "Overage - Wrong Sizes Received", "Wrong Brand Received", "Wrong Style Received", "Wrong Color Received", "Packing Slip is Correct - Missing Garments"]

class Home extends Component {

  state = {
    PONum: "",
    design: "",
    issue: "",
    reason: "",
    missingInfo: {
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
    receivedInfo: {
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
    showReceivedInput: false,
    showMissingInput: false
  }

  handleInputChange = event => {

    const { name, value } = event.target;

    // console.table(name, value)

    let numVal = parseInt(value)
    let POVal = value.replace(/[^0-9]+/g, "")
    let colorVal = value.replace(/[^a-zA-Z ]/g, "")

    let PONum = this.state.PONum
    let design = this.state.design
    let issue = this.state.issue
    let reason = this.state.reason
    let missingInfo = this.state.missingInfo
    let receivedInfo = this.state.receivedInfo
    let POInfo = this.state.POInfo


    switch (name) {
      case "PONum":
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

    // console.log("===================")

    // if (PONum && design && issue) {
    //   POInfo = true
    // }

    // console.log("PO Info: " + POInfo)

    // if(missing.brand && missing.style && missing.color && missing.xSmall > 0 || missing.small > 0 || missing.medium > 0 || missing.large > 0 || missing.xLarge > 0 || missing.twoXL > 0 || missing.threeXL > 0 || missing.fourXL > 0 || missing.fiveXL > 0) {
    //   missingInfo = true
    // }

    // console.log("Missing Info: " + missingInfo)

    // this.setState({
    //   POInfo: POInfo,
    //   missingInfo: missingInfo
    // })
  };

  dropDownChange = event => {
    // console.log(event)
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

  nextButton = event => {

    let issue = this.state.issue
    let showMissingInput = this.state.showMissingInput
    let showReceivedInput = this.state.showReceivedInput

    if (issue === "Missing Garments" && !showReceivedInput) {
      this.setState({ showReceivedInput: true })
    }
    else if (issue === "Missing Garments" && showReceivedInput) {
      this.setState({ showMissingInput: false })
    }
    else if (issue === "Extra Garments Received - Packing Slip is Correct, No Missing Garments" && !showMissingInput) {
      this.setState({ showMissingInput: true })
    }
    else if (issue === "Extra Garments Received - Packing Slip is Correct, No Missing Garments" && showMissingInput) {
      this.setState({ showMissingInput: false })
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
                  !this.state.showReceivedInput ?
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
                      <GarmentInfo
                        handleInputChange={this.handleInputChange}
                        brand={this.state.missingInfo.brand}
                        style={this.state.missingInfo.style}
                        color={this.state.missingInfo.color}
                        xSmall={this.state.missingInfo.xSmall}
                        small={this.state.missingInfo.small}
                        medium={this.state.missingInfo.medium}
                        large={this.state.missingInfo.large}
                        xLarge={this.state.missingInfo.xLarge}
                        twoXL={this.state.missingInfo.twoXL}
                        threeXL={this.state.missingInfo.threeXL}
                        fourXL={this.state.missingInfo.fourXL}
                        fiveXL={this.state.missingInfo.fiveXL}
                        hats={this.state.missingInfo.hats}
                      />
                      <FormBtn
                        text="Next"
                        classes="btn-success logoutBtn homeBtn"
                        // disabled={(!this.state.PONum || !this.state.design || !this.state.issue || !this.state.missingInfo.brand || !this.state.missingInfo.style || !this.state.missingInfo.color) && (this.state.missingInfo.xSmall === 0 && this.state.missingInfo.small === 0 && this.state.missingInfo.medium === 0 && this.state.missingInfo.large === 0 && this.state.missingInfo.xLarge === 0 && this.state.missingInfo.twoXL === 0 && this.state.missingInfo.threeXL === 0 && this.state.missingInfo.fourXL === 0 && this.state.missingInfo.fiveXL === 0) ? "" : "disabled"}
                        onClick={this.nextButton}
                      />
                    </div>
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
                      <GarmentInfo
                        handleInputChange={this.handleInputChange}
                        brand={this.state.missingInfo.brand}
                        style={this.state.missingInfo.style}
                        color={this.state.missingInfo.color}
                        xSmall={this.state.missingInfo.xSmall}
                        small={this.state.missingInfo.small}
                        medium={this.state.missingInfo.medium}
                        large={this.state.missingInfo.large}
                        xLarge={this.state.missingInfo.xLarge}
                        twoXL={this.state.missingInfo.twoXL}
                        threeXL={this.state.missingInfo.threeXL}
                        fourXL={this.state.missingInfo.fourXL}
                        fiveXL={this.state.missingInfo.fiveXL}
                        hats={this.state.missingInfo.hats}
                      />
                      <h3>What was received?</h3>
                      <hr></hr>
                      <GarmentInfo
                        handleInputChange={this.handleInputChange}
                        brand={this.state.receivedInfo.brand}
                        style={this.state.receivedInfo.style}
                        color={this.state.receivedInfo.color}
                        xSmall={this.state.receivedInfo.xSmall}
                        small={this.state.receivedInfo.small}
                        medium={this.state.receivedInfo.medium}
                        large={this.state.receivedInfo.large}
                        xLarge={this.state.receivedInfo.xLarge}
                        twoXL={this.state.receivedInfo.twoXL}
                        threeXL={this.state.receivedInfo.threeXL}
                        fourXL={this.state.receivedInfo.fourXL}
                        fiveXL={this.state.receivedInfo.fiveXL}
                        hats={this.state.receivedInfo.hats}
                      />
                      <FormBtn
                        text="Submit"
                        classes="btn-success logoutBtn homeBtn"
                      // disabled={(!this.state.PONum || !this.state.design || !this.state.issue || !this.state.missingInfo.brand || !this.state.missingInfo.style || !this.state.missingInfo.color) && (this.state.missingInfo.xSmall === 0 && this.state.missingInfo.small === 0 && this.state.missingInfo.medium === 0 && this.state.missingInfo.large === 0 && this.state.missingInfo.xLarge === 0 && this.state.missingInfo.twoXL === 0 && this.state.missingInfo.threeXL === 0 && this.state.missingInfo.fourXL === 0 && this.state.missingInfo.fiveXL === 0) ? "" : "disabled"}
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
                  <GarmentInfo
                    handleInputChange={this.handleInputChange}
                    brand={this.state.receivedInfo.brand}
                    style={this.state.receivedInfo.style}
                    color={this.state.receivedInfo.color}
                    xSmall={this.state.receivedInfo.xSmall}
                    small={this.state.receivedInfo.small}
                    medium={this.state.receivedInfo.medium}
                    large={this.state.receivedInfo.large}
                    xLarge={this.state.receivedInfo.xLarge}
                    twoXL={this.state.receivedInfo.twoXL}
                    threeXL={this.state.receivedInfo.threeXL}
                    fourXL={this.state.receivedInfo.fourXL}
                    fiveXL={this.state.receivedInfo.fiveXL}
                    hats={this.state.receivedInfo.hats}
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
