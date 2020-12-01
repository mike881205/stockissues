import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import { DropdownList } from "react-widgets"
// import "./style.css"

class SubmittedPOs extends React.Component {

    render() {
        
        return (
            <div className="row">
                <div className="col">
                    <FormBtn
                        text={this.props.POnum}
                        classes="btn-outline-success logoutBtn homeBtn"
                        name={this.props.name}
                        onClick={this.props.viewPOdesigns.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default SubmittedPOs