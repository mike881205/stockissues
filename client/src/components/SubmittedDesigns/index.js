import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import { DropdownList } from "react-widgets"
// import "./style.css"

class SubmittedDesigns extends React.Component {

    // componentDidMount() {
    //     console.log(this.props)
    // }

    render() {

        return (
            <div className="row btn-outline-success " onClick={this.props.viewDesignSizes}>
                <div className={"col " + this.props.design} id={this.props.issue}>
                    <p className={this.props.design} id={this.props.issue}>{this.props.design}</p>
                </div>
                <div className={"col " + this.props.design} id={this.props.issue}>
                    <p className={this.props.design} id={this.props.issue}>{this.props.issue}</p>
                </div>
            </div>
        );
    }
}

export default SubmittedDesigns