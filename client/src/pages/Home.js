import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../components/Form";
import { DropdownList } from "react-widgets"
import { Container } from "../components/Grid";
import { Redirect } from 'react-router-dom'
import API from "../utils/API";
import "./home.css"
import GarmentInfo from "../components/GarmentInfo";
import SubmittedPOs from "../components/SubmittedPOs";
import SubmittedDesigns from "../components/SubmittedDesigns";
import SubmittedSizes from "../components/SubmittedSizes";

const issues = ["Missing Garments - Wrong or Extra Garments Received", "Received Damaged/Stained/Defective Garments", "Missing Garments - Packing Slip is Correct, No Extras", "Extra Garments Received - Packing Slip is Correct, No Missing Garments"]
const priority = ["Yes", "No"]

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
    showPOinput: true,
    showMissingInput: false,
    showReceivedInput: false,
    showSummary: false,
    buttonText: "Next",
    notes: "",
    priority: "",
    dbInfo: "",
    viewSubmitted: false,
    viewDesigns: false,
    viewSizes: false,
    submittedPOs: [],
    submittedDesings: [],
    submittedSizes: [],
    POdesigns: [],
    selectedPO: ""
  }

  addPOInfo = () => {

    let issue = this.state.issue

    API.addPOInfo({
      POnum: this.state.POnum,
      design: this.state.design,
      issue: this.state.issue,
      notes: this.state.notes
    })
      .then(res => {

        console.log(res.data)

        this.setState({ newPOinfo: res.data })

        switch (issue) {
          case "Missing Garments - Wrong or Extra Garments Received":
            this.addMissingInfo(res.data.POnum, res.data.design, res.data.id)
            break;
          case "Received Damaged/Stained/Defective Garments":
            this.addMissingInfo(res.data.POnum, res.data.design, res.data.id)
            break;
          case "Missing Garments - Packing Slip is Correct, No Extras":
            this.addMissingInfo(res.data.POnum, res.data.design, res.data.id)
            break;
          case "Extra Garments Received - Packing Slip is Correct, No Missing Garments":
            this.addReceivedInfo(res.data.POnum, res.data.design, res.data.id)
            break;
        }
      })
  }

  addMissingInfo = (PONUM, POdesign, POInfoId) => {

    let issue = this.state.issue
    let newPOinfo = this.state.newPOinfo

    API.addMissingInfo({
      POnum: PONUM,
      design: POdesign,
      priority: this.state.priority,
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

        switch (issue) {
          case "Missing Garments - Wrong or Extra Garments Received":
            this.addReceivedInfo(newPOinfo.POnum, newPOinfo.design, newPOinfo.id)
            break;
          case "Received Damaged/Stained/Defective Garments":
            this.addReceivedInfo(newPOinfo.POnum, newPOinfo.design, newPOinfo.id)
            break;
          case "Missing Garments - Packing Slip is Correct, No Extras":
            alert("Issue Submitted")
            window.location.reload();
            break;
        }
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

        alert("Issue Submitted")
        window.location.reload();
      })
  }

  getPOinfo = () => {

    API.getPOinfo()
      .then(res => {

        this.setState({ dbInfo: res.data })

        let submittedPOs = []
        let POnums = []
        let data = res.data

        for (let i = 0; i < data.length; i++) {

          let index = data[i]

          POnums.push(index.POnum)

        }

        for (let i = 0; i < POnums.length; i++) {

          let index = POnums[i]
          let nextIndex = POnums[i + 1]

          if (i + 1 && nextIndex === index) {
            POnums.splice(i + 1, 1)
          }

          submittedPOs.push(
            <SubmittedPOs
              key={i + 1}
              POnum={index}
              name={index}
              viewDesigns={this.state.viewDesigns}
              viewPOdesigns={this.viewPOdesigns}
            />
          )

        }

        this.setState({ submittedPOs: submittedPOs })
      })
      .catch(err => {
        console.log(err);
      });
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
      case "notes":
        this.setState({ notes: value });
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

    let garmentInfoObj = {
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
      fiveXL: 0
    }

    switch (event) {
      case "Missing Garments - Wrong or Extra Garments Received":
        this.setState({
          missingInfo: garmentInfoObj,
          receivedInfo: garmentInfoObj,
          notes: "",
          issue: event,
          showReceivedInput: false,
          buttonText: "Next"
        });
        break;
      case "Received Damaged/Stained/Defective Garments":
        this.setState({
          missingInfo: garmentInfoObj,
          receivedInfo: garmentInfoObj,
          notes: "",
          issue: event,
          showReceivedInput: false,
          buttonText: "Next"
        });
        break;
      case "Missing Garments - Packing Slip is Correct, No Extras":
        this.setState({
          missingInfo: garmentInfoObj,
          receivedInfo: garmentInfoObj,
          notes: "",
          issue: event,
          showReceivedInput: false,
          buttonText: "Submit"
        });
        break;
      case "Extra Garments Received - Packing Slip is Correct, No Missing Garments":
        this.setState({
          missingInfo: garmentInfoObj,
          receivedInfo: garmentInfoObj,
          notes: "",
          issue: event,
          showReceivedInput: true,
          buttonText: "Submit"
        });
        break;
      case "Yes":
        this.setState({ priority: true })
        break;
      case "No":
        this.setState({ priority: false })
        break;
    }
  }

  nextSubmitButton = event => {

    let buttonText = this.state.buttonText

    if (buttonText === "Next") {

      this.setState({
        showReceivedInput: true,
        buttonText: "Submit"
      })
    }
    else {
      event.preventDefault()
      this.addPOInfo()
    }
  }

  viewSubmitted = () => {

    let viewSubmitted = this.state.viewSubmitted

    switch (viewSubmitted) {
      case true:
        this.setState({
          viewSubmitted: false,
          viewDesigns: false,
          viewSizes: false
        })
        break;
      case false:
        this.setState({ viewSubmitted: true })
        break;
    }
  }

  viewPOdesigns = (event) => {

    let POnum = event.target.name;
    let dbInfo = this.state.dbInfo
    let submittedDesings = []
    let designIssues = []

    console.log(dbInfo)

    this.setState({ viewDesigns: true })

    for (let i = 0; i < dbInfo.length; i++) {

      let info = dbInfo[i]

      if (POnum === info.POnum) {

        designIssues.push(info)
      }
    }

    console.log(designIssues)

    for (let i = 0; i < designIssues.length; i++) {

      submittedDesings.push(
        <SubmittedDesigns
          key={i + 1}
          viewDesignSizes={this.viewDesignSizes}
          design={designIssues[i].design}
          issue={designIssues[i].issue}
          class={designIssues[i].design}
          id={designIssues[i].issue}
        />
      )
    }

    this.setState({
      submittedDesings: submittedDesings,
      POdesigns: designIssues,
      selectedPO: POnum
    })
  }

  viewDesignSizes = (event) => {

    // console.log(event.target)

    let submittedSizes;
    let POdesigns = this.state.POdesigns;
    let propPOnum = this.state.selectedPO;
    let propDesign = event.target.className;
    let propIssue = event.target.id;
    let issue;
    let missingSizes;
    let receivedSizes;

    this.setState({ viewSizes: true })

    if (propDesign.includes("col ")) {
      propDesign = propDesign.replace("col ", "")
    }

    for (let i = 0; i < POdesigns.length; i++) {

      let info = POdesigns[i]

      if (propPOnum === info.POnum && propDesign === info.design && propIssue === info.issue) {

        missingSizes = info.Missings[0]
        receivedSizes = info.Receiveds[0]
        issue = info.issue
      }
    }

    console.log(missingSizes)
    console.log(receivedSizes)

    if (missingSizes && receivedSizes) {
      submittedSizes =
        <SubmittedSizes
          issue={issue}
          missingBrand={missingSizes.brand}
          missingStyle={missingSizes.style}
          missingColor={missingSizes.color}
          missingXS={missingSizes.xSmall}
          missingS={missingSizes.small}
          missingM={missingSizes.medium}
          missingL={missingSizes.large}
          missingXL={missingSizes.xLarge}
          missing2X={missingSizes.twoXL}
          missing3X={missingSizes.threeXL}
          missing4X={missingSizes.fourXL}
          missing5X={missingSizes.fiveXL}
          receivedBrand={receivedSizes.brand}
          receivedStyle={receivedSizes.style}
          receivedColor={receivedSizes.color}
          receivedXS={receivedSizes.xSmall}
          receivedS={receivedSizes.small}
          receivedM={receivedSizes.medium}
          receivedL={receivedSizes.large}
          receivedXL={receivedSizes.xLarge}
          received2X={receivedSizes.twoXL}
          received3X={receivedSizes.threeXL}
          received4X={receivedSizes.fourXL}
          received5X={receivedSizes.fiveXL}
        />
    }
    else if (missingSizes && !receivedSizes) {
      submittedSizes =
        <SubmittedSizes
          issue={issue}
          missingBrand={missingSizes.brand}
          missingStyle={missingSizes.style}
          missingColor={missingSizes.color}
          missingXS={missingSizes.xSmall}
          missingS={missingSizes.small}
          missingM={missingSizes.medium}
          missingL={missingSizes.large}
          missingXL={missingSizes.xLarge}
          missing2X={missingSizes.twoXL}
          missing3X={missingSizes.threeXL}
          missing4X={missingSizes.fourXL}
          missing5X={missingSizes.fiveXL}
        />
    }
    else if (receivedSizes && !missingSizes) {
      submittedSizes =
        <SubmittedSizes
          issue={issue}
          receivedBrand={receivedSizes.brand}
          receivedStyle={receivedSizes.style}
          receivedColor={receivedSizes.color}
          receivedXS={receivedSizes.xSmall}
          receivedS={receivedSizes.small}
          receivedM={receivedSizes.medium}
          receivedL={receivedSizes.large}
          receivedXL={receivedSizes.xLarge}
          received2X={receivedSizes.twoXL}
          received3X={receivedSizes.threeXL}
          received4X={receivedSizes.fourXL}
          received5X={receivedSizes.fiveXL}
        />
    }

    this.setState({ submittedSizes: submittedSizes })
  }

  viewBackButton = () => {

    let viewSizes = this.state.viewSizes
    let viewDesigns = this.state.viewDesigns


    if (viewSizes) {
      this.setState({
        viewSizes: false,
        viewDesigns: true
      })
    }
    else if (viewDesigns) {
      this.setState({
        viewDesigns: false,
        viewSizes:false,
        viewSubmitted: true
      })
    }
  }

  componentDidMount() {

    this.getPOinfo()
  }

  render() {
    return (
      <div className="container" align="center">

        {
          this.state.viewSubmitted ?
            <div className="jumbotron ">
              <FormBtn
                text={"Submit Issue"}
                classes="btn-success logoutBtn homeBtn"
                onClick={this.viewSubmitted}
              />
              <h1>Submitted Stock Issues</h1>
              <hr></hr>
              {
                this.state.viewSizes ?
                  <div>
                    <div className="PObox">
                      {this.state.submittedSizes}
                    </div>
                  </div>
                  :
                  this.state.viewDesigns ?
                    <div>
                      <p>Click on a Design to View Details</p>
                      <hr></hr>
                      <div className="row">
                        <div className="col">
                          <p><strong>Design</strong></p>
                        </div>
                        <div className="col">
                          <p><strong>Issue</strong></p>
                        </div>
                      </div>
                      <div className="PObox">
                        {this.state.submittedDesings}
                      </div>
                    </div>
                    :
                    <div>
                      <p>Click on a PO number to view issues for that PO</p>
                      <hr></hr>
                      <div className="PObox">
                        {this.state.submittedPOs}
                      </div>
                    </div>
              }
            </div>
            :
            <div className="jumbotron homeJumbo">
              <FormBtn
                text={"View Submitted Issues"}
                classes="btn-success logoutBtn homeBtn"
                onClick={this.viewSubmitted}
              />
              <br></br>
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
                <div>
                  {
                    this.state.issue === "Missing Garments - Wrong or Extra Garments Received" || this.state.issue === "Received Damaged/Stained/Defective Garments" || this.state.issue === "Missing Garments - Packing Slip is Correct, No Extras" ?
                      <FormGroup>
                        <Label text="Priority?" />
                        <DropdownList
                          name="priority"
                          onChange={this.dropDownChange}
                          data={priority}
                        />
                      </FormGroup>
                      :
                      ""
                  }
                </div>
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
                              disabled={
                                (this.state.POnum.length === 5 && this.state.design && this.state.issue)
                                  &&
                                  (this.state.missingInfo.brand && this.state.missingInfo.style && this.state.missingInfo.color)
                                  &&
                                  (this.state.missingInfo.xSmall > 0 || this.state.missingInfo.small > 0 || this.state.missingInfo.medium > 0 || this.state.missingInfo.large > 0 || this.state.missingInfo.xLarge > 0 || this.state.missingInfo.twoXL > 0 || this.state.missingInfo.threeXL > 0 || this.state.missingInfo.fourXL > 0 || this.state.missingInfo.fiveXL > 0)
                                  ?
                                  "" : "disabled"
                              }
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
                              // hats={this.state.receivedInfo.hats}
                              id={"received"}
                            />
                            <br></br>
                            <FormGroup>
                              <Label text="Notes" />
                              <Input
                                name="notes"
                                value={this.state.notes}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <br></br>
                            <h5>Make sure that all of the info is correct before submitting</h5>
                            <FormBtn
                              text={this.state.buttonText}
                              classes="btn-success logoutBtn homeBtn"
                              onClick={this.nextSubmitButton}
                              disabled={
                                (this.state.POnum.length === 5 && this.state.design && this.state.issue)
                                  &&
                                  (this.state.missingInfo.brand && this.state.missingInfo.style && this.state.missingInfo.color)
                                  &&
                                  (this.state.missingInfo.xSmall > 0 || this.state.missingInfo.small > 0 || this.state.missingInfo.medium > 0 || this.state.missingInfo.large > 0 || this.state.missingInfo.xLarge > 0 || this.state.missingInfo.twoXL > 0 || this.state.missingInfo.threeXL > 0 || this.state.missingInfo.fourXL > 0 || this.state.missingInfo.fiveXL > 0)
                                  &&
                                  (this.state.receivedInfo.brand && this.state.receivedInfo.style && this.state.receivedInfo.color)
                                  &&
                                  (this.state.receivedInfo.xSmall > 0 || this.state.receivedInfo.small > 0 || this.state.receivedInfo.medium > 0 || this.state.receivedInfo.large > 0 || this.state.receivedInfo.xLarge > 0 || this.state.receivedInfo.twoXL > 0 || this.state.receivedInfo.threeXL > 0 || this.state.receivedInfo.fourXL > 0 || this.state.receivedInfo.fiveXL > 0)
                                  ?
                                  "" : "disabled"
                              }
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
                          <br></br>
                          <FormGroup>
                            <Label text="Notes" />
                            <Input
                              name="notes"
                              value={this.state.notes}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <br></br>
                          <h5>Make sure that all of the info is correct before submitting</h5>
                          <FormBtn
                            text={this.state.buttonText}
                            classes="btn-success logoutBtn homeBtn"
                            onClick={this.nextSubmitButton}
                            disabled={
                              (this.state.POnum.length === 5 && this.state.design && this.state.issue)
                                &&
                                (this.state.missingInfo.brand && this.state.missingInfo.style && this.state.missingInfo.color)
                                &&
                                (this.state.missingInfo.xSmall > 0 || this.state.missingInfo.small > 0 || this.state.missingInfo.medium > 0 || this.state.missingInfo.large > 0 || this.state.missingInfo.xLarge > 0 || this.state.missingInfo.twoXL > 0 || this.state.missingInfo.threeXL > 0 || this.state.missingInfo.fourXL > 0 || this.state.missingInfo.fiveXL > 0)
                                ?
                                "" : "disabled"
                            }
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
                        <br></br>
                        <FormGroup>
                          <Label text="Notes" />
                          <Input
                            name="notes"
                            value={this.state.notes}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                        <br></br>
                        <h5>Make sure that all of the info is correct before submitting</h5>
                        <FormBtn
                          text={this.state.buttonText}
                          classes="btn-success logoutBtn homeBtn"
                          onClick={this.nextSubmitButton}
                          disabled={
                            (this.state.POnum.length === 5 && this.state.design && this.state.issue)
                              &&
                              (this.state.receivedInfo.brand && this.state.receivedInfo.style && this.state.receivedInfo.color)
                              &&
                              (this.state.receivedInfo.xSmall > 0 || this.state.receivedInfo.small > 0 || this.state.receivedInfo.medium > 0 || this.state.receivedInfo.large > 0 || this.state.receivedInfo.xLarge > 0 || this.state.receivedInfo.twoXL > 0 || this.state.receivedInfo.threeXL > 0 || this.state.receivedInfo.fourXL > 0 || this.state.receivedInfo.fiveXL > 0)
                              ?
                              "" : "disabled"
                          }
                        />
                      </div>
                    :
                    ""
                }

              </form>
            </div>
        }

      </div>
    );
  }
}




export default Home;
