import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import { DropdownList } from "react-widgets"
// import "./style.css"

class MissingGarmentInfo extends React.Component {

    render() {
        return (
            <FormGroup>
                <div className="row">
                    <div className="col">
                        <FormGroup>
                            <Label text="Brand" />
                            <Input
                                name="brand"
                                value={this.props.brand}
                                onChange={this.props.handleInputChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup>
                            <Label text="Style Number" />
                            <Input
                                name="style"
                                value={this.props.style}
                                onChange={this.props.handleInputChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup>
                            <Label text="Color" />
                            <Input
                                name="color"
                                value={this.props.color}
                                onChange={this.props.handleInputChange}
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Label text="XS" />
                        <Input
                            name="xSmall"
                            value={this.props.xSmall}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.small}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.medium}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.large}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.xLarge}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.twoXL}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.threeXL}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.fourXL}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.fiveXL}
                            onChange={this.props.handleInputChange}
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
                            value={this.props.hats}
                            onChange={this.props.handleInputChange}
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