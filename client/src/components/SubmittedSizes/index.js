import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../Form";
import { DropdownList } from "react-widgets"
// import "./style.css"

class SubmittedSizes extends React.Component {

    componentDidMount() {
        console.log(this.props.issue)
    }

    render() {

        if (this.props.issue === "Missing Garments - Wrong or Extra Garments Received" || this.props.issue === "Received Damaged/Stained/Defective Garments") {
            return (
                <div>
                    <div className="row">
                        <div className="col">
                            <p><strong>{this.props.issue}</strong></p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <p><strong>Missing</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{this.props.missingBrand}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.missingStyle}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.missingColor}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <p>XS</p>
                                </div>
                                <div className="col">
                                    <p>S</p>
                                </div>
                                <div className="col">
                                    <p>M</p>
                                </div>
                                <div className="col">
                                    <p>L</p>
                                </div>
                                <div className="col">
                                    <p>XL</p>
                                </div>
                                <div className="col">
                                    <p>2X</p>
                                </div>
                                <div className="col">
                                    <p>3X</p>
                                </div>
                                <div className="col">
                                    <p>4X</p>
                                </div>
                                <div className="col">
                                    <p>5X</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{this.props.missingXS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingM}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingXL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing2X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing3X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing4X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing5X}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col">
                            <p><strong>Receved</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{this.props.receivedBrand}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.receivedStyle}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.receivedColor}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <p>XS</p>
                                </div>
                                <div className="col">
                                    <p>S</p>
                                </div>
                                <div className="col">
                                    <p>M</p>
                                </div>
                                <div className="col">
                                    <p>L</p>
                                </div>
                                <div className="col">
                                    <p>XL</p>
                                </div>
                                <div className="col">
                                    <p>2X</p>
                                </div>
                                <div className="col">
                                    <p>3X</p>
                                </div>
                                <div className="col">
                                    <p>4X</p>
                                </div>
                                <div className="col">
                                    <p>5X</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{this.props.receivedXS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedM}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedXL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received2X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received3X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received4X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received5X}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if (this.props.issue === "Missing Garments - Packing Slip is Correct, No Extras") {
            return (
                <div>
                    <div className="row">
                        <div className="col">
                            <p><strong>{this.props.issue}</strong></p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <p><strong>Missing</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{this.props.missingBrand}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.missingStyle}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.missingColor}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <p>XS</p>
                                </div>
                                <div className="col">
                                    <p>S</p>
                                </div>
                                <div className="col">
                                    <p>M</p>
                                </div>
                                <div className="col">
                                    <p>L</p>
                                </div>
                                <div className="col">
                                    <p>XL</p>
                                </div>
                                <div className="col">
                                    <p>2X</p>
                                </div>
                                <div className="col">
                                    <p>3X</p>
                                </div>
                                <div className="col">
                                    <p>4X</p>
                                </div>
                                <div className="col">
                                    <p>5X</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{this.props.missingXS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingM}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missingXL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing2X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing3X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing4X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.missing5X}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if (this.props.issue === "Extra Garments Received - Packing Slip is Correct, No Missing Garments") {
            return (
                <div>
                    <div className="row">
                        <div className="col">
                            <p><strong>{this.props.issue}</strong></p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <p><strong>Receved</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{this.props.receivedBrand}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.receivedStyle}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.receivedColor}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <p>XS</p>
                                </div>
                                <div className="col">
                                    <p>S</p>
                                </div>
                                <div className="col">
                                    <p>M</p>
                                </div>
                                <div className="col">
                                    <p>L</p>
                                </div>
                                <div className="col">
                                    <p>XL</p>
                                </div>
                                <div className="col">
                                    <p>2X</p>
                                </div>
                                <div className="col">
                                    <p>3X</p>
                                </div>
                                <div className="col">
                                    <p>4X</p>
                                </div>
                                <div className="col">
                                    <p>5X</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{this.props.receivedXS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedS}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedM}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.receivedXL}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received2X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received3X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received4X}</p>
                                </div>
                                <div className="col">
                                    <p>{this.props.received5X}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }














        // return (
        //     <div>
        //         <div className="row">
        //             <div className="col">
        //                 <p><strong>Missing</strong></p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col">
        //                 <p>{this.props.missingBrand}</p>
        //             </div>
        //             <div className="col">
        //                 <p>{this.props.missingStyle}</p>
        //             </div>
        //             <div className="col">
        //                 <p>{this.props.missingColor}</p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col">
        //                 <div className="row">
        //                     <div className="col">
        //                         <p>XS</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>S</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>M</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>L</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>XL</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>2X</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>3X</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>4X</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>5X</p>
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div className="col">
        //                         <p>{this.props.missingXS}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missingS}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missingM}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missingL}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missingXL}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missing2X}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missing3X}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missing4X}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.missing5X}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <br></br>
        //         <div className="row">
        //             <div className="col">
        //                 <p><strong>Receved</strong></p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col">
        //                 <p>{this.props.receivedBrand}</p>
        //             </div>
        //             <div className="col">
        //                 <p>{this.props.receivedStyle}</p>
        //             </div>
        //             <div className="col">
        //                 <p>{this.props.receivedColor}</p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col">
        //                 <div className="row">
        //                     <div className="col">
        //                         <p>XS</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>S</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>M</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>L</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>XL</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>2X</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>3X</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>4X</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>5X</p>
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div className="col">
        //                         <p>{this.props.receivedXS}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.receivedS}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.receivedM}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.receivedL}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.receivedXL}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.received2X}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.received3X}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.received4X}</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>{this.props.received5X}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

export default SubmittedSizes