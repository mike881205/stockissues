import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../components/Form";
import { DropdownList } from "react-widgets"
import { Container } from "../components/Grid";
import { Redirect } from 'react-router-dom'
import API from "../utils/API";
import "./home.css"
import GarmentInfo from "../components/GarmentInfo";

const issues = ["Missing Garments - Wrong or Extra Garments Received", "Received Damaged/Stained/Defective Garments", "Missing Garments - Packing Slip is Correct, No Extras", "Extra Garments Received - Packing Slip is Correct, No Missing Garments"]

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
    buttonText: ""
  }

  handleInputChange = event => {

    const { name, value } = event.target;

    // console.table(name, value)

    let numVal = parseInt(value)
    let POVal = value.replace(/[^0-9]+/g, "")
    let colorVal = value.replace(/[^a-zA-Z ]/g, "")

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

  };

  dropDownChange = event => {
    // console.log(event)

    switch (event) {
      case "Missing Garments - Wrong or Extra Garments Received":
        this.setState({
          issue: event,
          showReceivedInput: false,
          buttonText: "Next"
        });
        break;
      case "Received Damaged/Stained/Defective Garments":
        this.setState({
          issue: event,
          showReceivedInput: false,
          buttonText: "Next"
        });
        break;
      case "Missing Garments - Packing Slip is Correct, No Extras":
        this.setState({
          issue: event,
          showReceivedInput: false,
          buttonText: "Submit"
        });
        break;
      case "Extra Garments Received - Packing Slip is Correct, No Missing Garments":
        console.log("extras")
        this.setState({
          issue: event,
          showReceivedInput: true,
          buttonText: "Submit"
        });
        break;
    }
  }

  nextSubmitButton = event => {

    let buttonText = this.state.buttonText

    switch (buttonText) {
      case "Submit":
        event.preventDefault()
        alert("Submit")
        break;
      case "Next":
        this.setState({ 
          showReceivedInput: true,
          buttonText: "Submit" 
        })
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
              this.state.issue ?
                this.state.issue !== "Extra Garments Received - Packing Slip is Correct, No Missing Garments" ?
                  this.state.issue !== "Missing Garments - Packing Slip is Correct, No Extras" ?
                    !this.state.showReceivedInput ?
                      <div>
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
                          text={this.state.buttonText}
                          classes="btn-success logoutBtn homeBtn"
                          onClick={this.nextSubmitButton}
                        />
                      </div>
                      :
                      <div>
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
                        <hr></hr>
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
                          text={this.state.buttonText}
                          classes="btn-success logoutBtn homeBtn"
                          onClick={this.nextSubmitButton}
                        />
                      </div>
                    :
                    <div>
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
                        text={this.state.buttonText}
                        classes="btn-success logoutBtn homeBtn"
                        onClick={this.nextSubmitButton}
                      />
                      <hr></hr>
                    </div>
                  :
                  <div>
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
                      text={this.state.buttonText}
                      classes="btn-success logoutBtn homeBtn"
                      onClick={this.nextSubmitButton}
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
