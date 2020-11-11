import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import { DropdownList } from "react-widgets"
// import "./style.css"

class MissingGarmentInfo extends React.Component {

    state = {
        brand: "",
        style: "",
        color: "",
        size: {
            xSmall: "",
            small: "",
            medium: "",
            large: "",
            xLarge: "",
            twoXL: "",
            threeXL: "",
            fourXL: "",
            fiveXL: ""
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, value)

        if (name === "color") {
            let colorVal = value.replace(/[^a-zA-Z ]/g, "")
            this.setState({
                color: colorVal.trim()
            });
        }
        else {
            this.setState({
                [name]: value.trim()
            });
        }

    };

    sizeInputChange = event => {
        const { name, value } = event.target;

        let numVal = value.replace(/[^0-9]+/g, "")

        let sizeObj = {
            xSmall: this.state.size.xSmall,
            small: this.state.size.small,
            medium: this.state.size.medium,
            large: this.state.size.large,
            xLarge: this.state.size.xLarge,
            twoXL: this.state.size.twoXL,
            threeXL: this.state.size.threeXL,
            fourXL: this.state.size.fourXL,
            fiveXL: this.state.size.fiveXL
        }

        switch (name) {
            case "xSmall":
                sizeObj.xSmall = numVal.trim()
                break;
            case "small":
                sizeObj.small = numVal.trim()
                break;
            case "medium":
                sizeObj.medium = numVal.trim()
                break;
            case "large":
                sizeObj.large = numVal.trim()
                break;
            case "xLarge":
                sizeObj.xLarge = numVal.trim()
                break;
            case "twoXL":
                sizeObj.twoXL = numVal.trim()
                break;
            case "threeXL":
                sizeObj.threeXL = numVal.trim()
                break;
            case "fourXL":
                sizeObj.fourXL = numVal.trim()
                break;
            case "fiveXL":
                sizeObj.fiveXL = numVal.trim()
                break;
        }

        this.setState({ size: sizeObj })
    }

    render() {
        return (
            <FormGroup>
                <div className="row">
                    <div className="col">
                        <FormGroup>
                            <Label text="Brand" />
                            <Input
                                name="brand"
                                value={this.state.brand}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup>
                            <Label text="Style Number" />
                            <Input
                                name="style"
                                value={this.state.style}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup>
                            <Label text="Color" />
                            <Input
                                name="color"
                                value={this.state.color}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Label text="XS" />
                        <Input
                            name="xSmall"
                            value={this.state.size.xSmall}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="S" />
                        <Input
                            name="small"
                            value={this.state.size.small}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="M" />
                        <Input
                            name="medium"
                            value={this.state.size.medium}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="L" />
                        <Input
                            name="large"
                            value={this.state.size.large}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="XL" />
                        <Input
                            name="xLarge"
                            value={this.state.size.xLarge}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="2XL" />
                        <Input
                            name="twoXL"
                            value={this.state.size.twoXL}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="3XL" />
                        <Input
                            name="threeXL"
                            value={this.state.size.threeXL}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="4XL" />
                        <Input
                            name="fourXL"
                            value={this.state.size.fourXL}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                    <div className="col">
                        <Label text="5XL" />
                        <Input
                            name="fiveXL"
                            value={this.state.size.fiveXL}
                            onChange={this.sizeInputChange}
                        />
                    </div>
                </div>
            </FormGroup>
        );
    }
}

export default MissingGarmentInfo