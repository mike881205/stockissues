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

  addPOInfo = () => {

    API.addPOInfo({
      PONum: this.state.PONum,
      design: this.state.design,
      issue: this.state.issue
    })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  // addMissingInfo = (brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL) => {

  // }

  // addReceivedInfo = (brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL) => {

  // }

  handleInputChange = event => {

    console.log(event.target)

    const { name, value, id } = event.target;

    console.table(name, value, id)

    let missingObj = {
      brand: this.state.missingInfo.brand,
      style: this.state.missingInfo.style,
      color: this.state.missingInfo.color,
      xSmall: this.state.missingInfo.xSmall,
      small: this.state.missingInfo.small,
      medium: this.state.missingInfo.medium,
      large: this.state.missingInfo.large,
      xLarge: this.state.missingInfo.xLarge,
      twoXL: this.state.missingInfo.twoXL,
      threeXL: this.state.missingInfo.threeXL,
      fourXL: this.state.missingInfo.fourXL,
      fiveXL: this.state.missingInfo.fiveXL
    }

    let receivedObj = {
      brand: this.state.receivedInfo.brand,
      style: this.state.receivedInfo.style,
      color: this.state.receivedInfo.color,
      xSmall: this.state.receivedInfo.xSmall,
      small: this.state.receivedInfo.small,
      medium: this.state.receivedInfo.medium,
      large: this.state.receivedInfo.large,
      xLarge: this.state.receivedInfo.xLarge,
      twoXL: this.state.receivedInfo.twoXL,
      threeXL: this.state.receivedInfo.threeXL,
      fourXL: this.state.receivedInfo.fourXL,
      fiveXL: this.state.receivedInfo.fiveXL
    }

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
    }

    if (id === "missing") {
      switch (name) {
        case "brand":
          missingObj.brand = value;
          this.setState({ missingInfo: missingObj });
          break;
        case "style":
          missingObj.style = value;
          this.setState({ missingInfo: missingObj });
          break;
        case "color":
          missingObj.color = colorVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "xSmall":
          missingObj.xSmall = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "small":
          missingObj.small = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "medium":
          missingObj.medium = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "large":
          missingObj.large = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "xLarge":
          missingObj.xLarge = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "twoXL":
          missingObj.twoXL = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "threeXL":
          missingObj.threeXL = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "fourXL":
          missingObj.fourXL = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        case "fiveXL":
          missingObj.fiveXL = numVal;
          this.setState({ missingInfo: missingObj });
          break;
        // case "hats":
        //   missingObj.hats = numVal;
        //   this.setState({ missingInfo: missingObj });
        //   break;
      }
    }
    else if (id === "received") {
      switch (name) {
        case "brand":
          receivedObj.brand = value;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "style":
          receivedObj.style = value;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "color":
          receivedObj.color = colorVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "xSmall":
          receivedObj.xSmall = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "small":
          receivedObj.small = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "medium":
          receivedObj.medium = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "large":
          receivedObj.large = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "xLarge":
          receivedObj.xLarge = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "twoXL":
          receivedObj.twoXL = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "threeXL":
          receivedObj.threeXL = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "fourXL":
          receivedObj.fourXL = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        case "fiveXL":
          receivedObj.fiveXL = numVal;
          this.setState({ receivedInfo: receivedObj });
          break;
        // case "hats":
        //   receivedObj.hats = numVal;
        //   this.setState({ receivedInfo: receivedObj });
        //   break;
      }
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
    let issue = this.state.issue

    if (buttonText === "Next") {
      this.setState({
        showReceivedInput: true,
        buttonText: "Submit"
      })
    }
    else {
      event.preventDefault()
      this.addPOInfo()
      // switch (issue) {
      //   case "Missing Garments - Wrong or Extra Garments Received":
      //   // this.addMissingInfo()
      //   // this.addReceivedInfo()
      //   break;
      //   case "Received Damaged/Stained/Defective Garments":
      //   // this.addMissingInfo()
      //   // this.addReceivedInfo()
      //   break;
      //   case "Missing Garments - Packing Slip is Correct, No Extras":
      //   // this.addMissingInfo()
      //   break;
      //   case "Extra Garments Received - Packing Slip is Correct, No Missing Garments":
      //   // this.addReceivedInfo()
      //   break;
      // }
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
                          // hats={this.state.missingInfo.hats}
                          id={"missing"}
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
                          // hats={this.state.missingInfo.hats}
                          id={"missing"}
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
                          id={"received"}
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
                          // hats={this.state.missingInfo.hats}
                          id={"missing"}
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
                      id={"received"}
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
