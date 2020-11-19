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
    POnum: "",
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

    let issue = this.state.issue

    let missBrand = this.state.missingInfo.brand
    let missStyle = this.state.missingInfo.style
    let missColor = this.state.missingInfo.color
    let missXsmall = this.state.missingInfo.xSmall
    let missSmall = this.state.missingInfo.small
    let missMedium = this.state.missingInfo.medium
    let missLarge = this.state.missingInfo.large
    let missXlarge = this.state.missingInfo.xLarge
    let missTwoXL = this.state.missingInfo.twoXL
    let missThreeXL = this.state.missingInfo.threeXL
    let missFourXL = this.state.missingInfo.fourXL
    let missFiveXL = this.state.missingInfo.fiveXL

    let recBrand = this.state.receivedInfo.brand
    let recStyle = this.state.receivedInfo.style
    let recColor = this.state.receivedInfo.color
    let recXsmall = this.state.receivedInfo.xSmall
    let recSmall = this.state.receivedInfo.small
    let recMedium = this.state.receivedInfo.medium
    let recLarge = this.state.receivedInfo.large
    let recXlarge = this.state.receivedInfo.xLarge
    let recTwoXL = this.state.receivedInfo.twoXL
    let recThreeXL = this.state.receivedInfo.threeXL
    let recFourXL = this.state.receivedInfo.fourXL
    let recFiveXL = this.state.receivedInfo.fiveXL

    API.addPOInfo({
      POnum: this.state.POnum,
      design: this.state.design,
      issue: this.state.issue
    })
      .then(res => {
        console.log(res.data)

        this.addMissingInfo(res.data.POnum, res.data.design, res.data.id)

        this.addReceivedInfo(res.data.POnum, res.data.design, res.data.id)

      })
  }

  addMissingInfo = (PONUM, POdesign, POInfoId) => {
    API.addMissingInfo({
      POnum: PONUM,
      design: POdesign,
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
      fiveXL: this.state.missingInfo.fiveXL,
      POInfoId: POInfoId
    })
      .then(res => {
        console.log(res.data)
      })
  }

  addReceivedInfo = (PONUM, POdesign, POInfoId) => {
    API.addReceivedInfo({
      POnum: PONUM,
      design: POdesign,
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
      fiveXL: this.state.receivedInfo.fiveXL,
      POInfoId: POInfoId
    })
      .then(res => {
        console.log(res.data)
      })
  }

  handleInputChange = event => {

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
    let POval = value.replace(/[^0-9]+/g, "")
    let colorVal = value.replace(/[^a-zA-Z ]/g, "")

    switch (name) {
      case "POnum":
        this.setState({ POnum: POval.trim() });
        break;
      case "design":
        this.setState({ design: value });
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

    let POnum = this.state.POnum
    let design = this.state.design
    let issue = this.state.issue

    let missBrand = this.state.missingInfo.brand
    let missStyle = this.state.missingInfo.style
    let missColor = this.state.missingInfo.color
    // let missXsmall = this.state.missingInfo.xSmall
    // let missSmall = this.state.missingInfo.small
    // let missMedium = this.state.missingInfo.medium
    // let missLarge = this.state.missingInfo.large
    // let missXlarge = this.state.missingInfo.xLarge
    // let missTwoXL = this.state.missingInfo.twoXL
    // let missThreeXL = this.state.missingInfo.threeXL
    // let missFourXL = this.state.missingInfo.fourXL
    // let missFiveXL = this.state.missingInfo.fiveXL

    let recBrand = this.state.receivedInfo.brand
    let recStyle = this.state.receivedInfo.style
    let recColor = this.state.receivedInfo.color
    // let recXsmall = this.state.receivedInfo.xSmall
    // let recSmall = this.state.receivedInfo.small
    // let recMedium = this.state.receivedInfo.medium
    // let recLarge = this.state.receivedInfo.large
    // let recXlarge = this.state.receivedInfo.xLarge
    // let recTwoXL = this.state.receivedInfo.twoXL
    // let recThreeXL = this.state.receivedInfo.threeXL
    // let recFourXL = this.state.receivedInfo.fourXL
    // let recFiveXL = this.state.receivedInfo.fiveXL

    if (buttonText === "Next") {

      this.setState({
        showReceivedInput: true,
        buttonText: "Submit"
      })

      // if (missBrand && missStyle && missColor) {
      //   this.setState({
      //     showReceivedInput: true,
      //     buttonText: "Submit"
      //   })
      // }
      // else {
      //   alert("Please enter missing garment info")
      // }
    }
    else {
      if (POnum && design && issue) {
        event.preventDefault()
        this.addPOInfo()
      }
      else {
        alert("PO Number & Design Name are Required")
      }
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
                name="POnum"
                value={this.state.POnum}
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
                          disabled={this.state.POnum && this.state.design && this.state.issue && this.state.missingInfo.brand && this.state.missingInfo.style && this.state.missingInfo.color &&  this.state.missingInfo.xSmall > 0 || this.state.missingInfo.small > 0 || this.state.missingInfo.medium > 0 || this.state.missingInfo.large > 0 || this.state.missingInfo.xLarge > 0 || this.state.missingInfo.twoXL > 0 || this.state.missingInfo.threeXL > 0 || this.state.missingInfo.fourXL > 0 || this.state.missingInfo.fiveXL > 0 ? "" : "disabled"}
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
