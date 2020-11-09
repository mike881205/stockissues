import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./style.css"

class ClientRow extends Component {

    getClientInfo = () => {

        const { id, firstName, lastName, email, phone, streetAddress, aptUnitNum, city, state, zip } = this.props

        this.props.setClientResults([id, firstName, lastName, email, phone, streetAddress, aptUnitNum, city, state, zip])

    }

    render() {
        return (
            <div>
                <Link to="/clientresults">
                    <button type="button" className="btn btn-outline-secondary clientBtn" onClick={this.getClientInfo}>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-2">
                                <p> {this.props.lastName} </p>
                            </div>
                            <div className="col-sm-2">
                                <p> {this.props.firstName} </p>
                            </div>
                            <div className="col-sm-2">
                                <p> {this.props.city} </p>
                            </div>
                            <div className="col-sm-2">
                                <p> {this.props.state} </p>
                            </div>
                            <div className="col-sm-2">
                                <p> {this.props.created} </p>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </button>
                </Link>
            </div>
        )
    }

}

export default ClientRow