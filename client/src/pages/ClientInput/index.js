import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { DropdownList } from "react-widgets"
import HouseMemberInput from "../../components/HouseMemberInput"
import "./style.css";

const states = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]

const dwellings = ["House", "Condo", "Town Home", "Apartment"]

class ClientInput extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        aptUnitNum: "",
        city: "",
        state: "",
        zip: "",
        assessor: "",
        audit: "",
        dwelling: "",
        gateCode: "",
        members: [],

        clientAdded: false,

        numChildren: 0,

        children: [],

        emptyMem: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value.trim()
        });
    };

    dropDownChange = event => {
        console.log(event)
        switch (event) {
            case "House":
                this.setState({ dwelling: event });
                break;
            case "Condo":
                this.setState({ dwelling: event });
                break;
            case "Town Home":
                this.setState({ dwelling: event });
                break;
            case "Apartment":
                this.setState({ dwelling: event });
                break;
            default:
                this.setState({ state: event });
        }
    }

    setHouseMembers = (id, info) => {

        const { name, relationship, age } = info

        this.state.members.map(
            (member, index) => (id === index)
                ?
                Object.assign(member, { name: name, relationship: relationship, age: age })
                :
                member
        )
    }

    addChild = () => {
        
        this.setState({ numChildren: this.state.numChildren + 1 })

        let children = this.state.children

        children.push(<HouseMemberInput
            key={this.state.numChildren}
            id={this.state.numChildren}
            removeChild={this.removeChild}
            addMember={this.setHouseMembers} />)

        this.setState({ children: children })

        let members = this.state.members

        members.push({ name: "", relationship: "", age: "" })

        this.setState({ members: members })

        this.setState({emptyMem: true})

    }

    removeChild = event => {

        let parent = event.target
        let children = this.state.children
        let members = this.state.members

        while (parent && parent.className !== "inputRow") {
            parent = parent.parentElement;
        }

        let id = parent.id
        let numID = parseInt(id)

        for (let i = 0; i < children.length; i++) {
            let key = children[i].key
            if (id === key) {
                children.splice(i, 1)
            }
        }

        this.setState({ children: children })

        for (let i = 0; i < members.length; i++) {
            if (numID === i) {
                members.splice(i, 1)
            }
        }

        if (members.length === 0) {
            this.setState({emptyMem: false})
        }
        else {
            for (let i = 0; i < members.length; i++) {

                let member = members[i]
                const { name, relationship, age } = member
    
                if (!name || !relationship || !age) {
                    this.setState({emptyMem: true})
                }
            }
        }

        

        this.setState({ members: members })

    }

    addClient = event => {

        event.preventDefault();

        API.addClient({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            streetAddress: this.state.streetAddress,
            aptUnitNum: this.state.aptUnitNum,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            audit: this.state.audit,
            dwelling: this.state.dwelling,
            gateCode: this.state.gateCode
        })
            .then(res => {

                console.log(res.data.id)

                let clientID = res.data.id
                let members = this.state.members

                for (let i = 0; i < members.length; i++) {

                    let member = members[i]
                    const { name, relationship, age } = member

                    API.addMember({
                        name: name,
                        relationship: relationship,
                        age: age,
                        ClientId: clientID
                    })
                        .then(res => {
                            console.log("client added")
                            this.setState({ clientAdded: true });
                            this.props.setClient(res.data)
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }

            })
            .catch(err => {
                console.log(err);
            });

    };

    render() {

        if (!this.state.clientAdded) {
            return (
                <div>
                    <Container classes="ClientInput">
                        <h3> Client Information </h3>
                        <hr></hr>
                        <form>
                            <FormGroup>
                                <Label text="First Name" />
                                <Input
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    type="firstName"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Last Name" />
                                <Input
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    type="lastName"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Email" />
                                <Input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Phone" />
                                <Input
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleInputChange}
                                    type="phone"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Dwelling Type" />
                                <DropdownList
                                    name="dwelling"
                                    onChange={this.dropDownChange}
                                    data={dwellings}
                                    type="dwelling"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Street Address" />
                                <Input
                                    name="streetAddress"
                                    value={this.state.streetAddress}
                                    onChange={this.handleInputChange}
                                    type="streetAddress"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Apartment/Unit Number" />
                                <Input
                                    name="aptUnitNum"
                                    value={this.state.aptUnitNum}
                                    onChange={this.handleInputChange}
                                    type="aptUnitNum"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="City" />
                                <Input
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    type="city"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="State" />
                                <DropdownList
                                    name="state"
                                    onChange={this.dropDownChange}
                                    data={states}
                                    type="state"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Zip" />
                                <Input
                                    name="zip"
                                    value={this.state.zip}
                                    onChange={this.handleInputChange}
                                    type="zip"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Audit" />
                                <Input
                                    name="audit"
                                    value={this.state.audit}
                                    onChange={this.handleInputChange}
                                    type="audit"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Gate Code" />
                                <Input
                                    name="gateCode"
                                    value={this.state.gateCode}
                                    onChange={this.handleInputChange}
                                    type="gateCode"
                                />
                            </FormGroup>
                            <hr></hr>
                            {/* //======================================================================================                             */}
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3>Household Members</h3>
                                </div>
                                <div className="col-sm-1">
                                    <p>x</p>
                                </div>
                                <div className="col-sm-1">
                                    <p>N/A</p>
                                </div>
                            </div>
                            <div>
                                {this.state.children}
                            </div>
                            <button type="button" className="btn btn-outline-success addBtn" data-add-button="" href="#" onClick={this.addChild}>Add</button>
                            {/* //======================================================================================                             */}
                            <hr></hr>
                            {this.state.error ? <Small text={this.state.error} /> : ""}
                            <FormBtn
                                disabled={
                                    this.state.firstName && this.state.lastName && this.state.email && this.state.phone && this.state.streetAddress && this.state.city && this.state.state && this.state.zip && this.state.dwelling && this.state.audit && !this.state.emptyMem ? "" : "disabled"
                                }
                                text="Begin Assessment"
                                onClick={this.addClient}
                                classes="btn-primary"
                            />
                        </form>
                    </Container>
                </div>
            );
        }
        else {
            return (
                <Redirect to="/" />
            )
        }
    }
}

export default ClientInput;
