import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import { DropdownList } from "react-widgets"
import "./style.css";

const relationship = ["Spouse", "Son", "Daughter", "Brother", "Sister", "Cousin", "Mother", "Father", "Aunt", "Uncle", "Other"]

class HouseMemberInput extends Component {

    state = {
        name: "",
        relationship: "",
        age: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value.trim()
        });
    };

    dropDownChange = event => {
        this.setState({ relationship: event });
    }

    render() {

        this.props.addMember(this.props.id, this.state)

        return (
            <div className="inputRow" id={this.props.id} >
                <FormGroup>
                    <div className="row">
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm">
                                    <Label text="Name" />
                                </div>
                                <div className="col-sm">
                                    <Label text="Relationship" />
                                </div>
                                <div className="col-sm">
                                    <Label text="Age" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <Input
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        type="name"
                                    />
                                </div>
                                <div className="col-sm">
                                    <DropdownList
                                        name="relationship"
                                        onChange={this.dropDownChange}
                                        data={relationship}
                                        type="relationship"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Input
                                        name="age"
                                        value={this.state.age}
                                        onChange={this.handleInputChange}
                                        type="age"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1">
                        <button type="button" className="btn btn-danger x" onClick={this.props.removeChild}><strong>X</strong></button>
                        </div>
                    </div>
                </FormGroup>
            </div>
        )
    }
}

export default HouseMemberInput