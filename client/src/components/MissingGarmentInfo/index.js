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
            xSmall: 0,
            small: 0,
            medium: 0,
            large: 0,
            xLarge: 0,
            twoXL: 0,
            threeXL: 0,
            fourXL: 0,
            fiveXL: 0,
        },
        hats: 0
    }

    handleInputChange = event => {

        const { name, value } = event.target;

        if (name === "color") {

            let colorVal = value.replace(/[^a-zA-Z ]/g, "")

            this.setState({ color: colorVal.trim() });
        }
        else {
            this.setState({ [name]: value.trim() });
        }

        // let sizeArray = [
        //     this.state.size.xSmall,
        //     this.state.size.small,
        //     this.state.size.medium,
        //     this.state.size.large,
        //     this.state.size.xLarge,
        //     this.state.size.twoXL,
        //     this.state.size.threeXL,
        //     this.state.size.fourXL,
        //     this.state.size.fiveXL
        // ]

        // let greaterThanZero = false
        // let brandStyleColor = false
        // let brand = this.state.brand
        // let style = this.state.style
        // let color = this.state.color

        // if (name === "color") {

        //     let colorVal = value.replace(/[^a-zA-Z ]/g, "")

        //     if (value.length > 0) {
        //         this.setState({ color: colorVal.trim() });
        //     }
        //     else {
        //         this.setState({ color: "" });
        //     }
        // }
        // else {

        //     if (value.length > 0) {
        //         this.setState({ [name]: value.trim() });
        //     }
        //     else {
        //         this.setState({ [name]: "" });
        //     }
        // }

        // for (let i = 0; i < sizeArray.length; i++) {

        //     let size = sizeArray[i]

        //     if (size > 0) {
        //         greaterThanZero = true
        //         console.log("Greater than Zero")
        //     }
        // }

        // if (brand !== "" && style !== "" && color !== "") {
        //     brandStyleColor = true

        //     console.log("brandStyleColor")
        // }

        // if (greaterThanZero && brandStyleColor) {

        //     console.log("Info Complete")

        //     this.props.setMissingState(this.state)
        // }
        // else {
        //     console.log("Info Inomplete")
        // }
    };

    sizeInputChange = event => {

        const { name, value } = event.target;

        let numVal = parseInt(value)

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

        let hats = this.state.hats

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
            case "hats":
                hats = numVal
                break;
        }

        this.setState({ 
            size: sizeObj,
            hats: hats 
        })

        // let greaterThanZero = false
        // let brandStyleColor = false

        // let brand = this.state.brand
        // let style = this.state.style
        // let color = this.state.color

        // let sizeArray = [
        //     sizeObj.xSmall,
        //     sizeObj.small,
        //     sizeObj.medium,
        //     sizeObj.large,
        //     sizeObj.xLarge,
        //     sizeObj.twoXL,
        //     sizeObj.threeXL,
        //     sizeObj.fourXL,
        //     sizeObj.fiveXL
        // ]

        // for (let i = 0; i < sizeArray.length; i++) {

        //     let size = sizeArray[i]

        //     if (size > 0) {
        //         greaterThanZero = true
        //         console.log("greaterThanZero")
        //     }
        // }

        // if (brand !== "" && style !== "" && color !== "") {
        //     brandStyleColor = true

        //     console.log("brandStyleColor")
        // }

        // if (greaterThanZero && brandStyleColor) {

        //     console.log("Info Complete")

        //     this.props.setMissingState(this.state)
        // }
        // else {
        //     console.log("Info Inomplete")
        // }
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
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="S" />
                        <Input
                            name="small"
                            value={this.state.size.small}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="M" />
                        <Input
                            name="medium"
                            value={this.state.size.medium}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="L" />
                        <Input
                            name="large"
                            value={this.state.size.large}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="XL" />
                        <Input
                            name="xLarge"
                            value={this.state.size.xLarge}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="2XL" />
                        <Input
                            name="twoXL"
                            value={this.state.size.twoXL}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="3XL" />
                        <Input
                            name="threeXL"
                            value={this.state.size.threeXL}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="4XL" />
                        <Input
                            name="fourXL"
                            value={this.state.size.fourXL}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="5XL" />
                        <Input
                            name="fiveXL"
                            value={this.state.size.fiveXL}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                    <div className="col">
                        <Label text="Hats" />
                        <Input
                            name="hats"
                            value={this.state.hats}
                            onChange={this.sizeInputChange}
                            type="number"
                            min={0}
                            onKeyDown={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                </div>
            </FormGroup>
        );
    }
}

export default MissingGarmentInfo