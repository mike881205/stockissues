import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import { DropdownList } from "react-widgets"
// import "./style.css"

class ReceivedGarmentInfo extends React.Component {

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

    sizeInputChange = event => {
        const { name, value } = event.target;
        
        let numVal = value.replace(/[A-Za-z]/g, '')

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
                sizeObj.xSmall = numVal
                break;
            case "small":
                sizeObj.small = numVal
                break;
            case "medium":
                sizeObj.medium = numVal
                break;
            case "large":
                sizeObj.large = numVal
                break;
            case "xLarge":
                sizeObj.xLarge = numVal
                break;
            case "twoXL":
                sizeObj.twoXL = numVal
                break;
            case "threeXL":
                sizeObj.threeXL = numVal
                break;
            case "fourXL":
                sizeObj.fourXL = numVal
                break;
            case "fiveXL":
                sizeObj.fiveXL = numVal
                break;
        }

        this.setState({ size: sizeObj })
    }

    render() {
        return (
            <FormGroup>
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

export default ReceivedGarmentInfo