import React, { Component } from "react";
import API from "../../utils/API";
import ClientRow from "../../components/ClientRow"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form"
import Jumbotron from "../../components/Jumbotron";
import { Link } from 'react-router-dom'
import "./style.css"

class Clients extends Component {

    state = {
        clients: []
    }

    getClients = () => {
        API.getClients()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    let createdString1 = res.data[i].createdAt.split(":")
                    let createdString2 = createdString1[0].split("T")
                    let createdString3 = createdString2[0].split("-")
                    let year = parseInt(createdString3[0])
                    let month = parseInt(createdString3[1])
                    let day = parseInt(createdString3[2])
                    let created = (month + "/" + (day) + "/" + year)
                    res.data[i].createdAt = created
                }
                console.log(res.data)
                this.setState({ clients: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getClients()
    }

    render() {
        return (
            <div>
                <Header />
                <Container fluid>
                    <div className="text-center">
                        <div className="row headings">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-2">
                                <h3>Last Name</h3>
                            </div>
                            <div className="col-sm-2">
                                <h3>First Name</h3>
                            </div>
                            <div className="col-sm-2">
                                <h3>City</h3>
                            </div>
                            <div className="col-sm-2">
                                <h3>State</h3>
                            </div>
                            <div className="col-sm-2">
                                <h3>Date Added</h3>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                        <div className="clientBox">
                            {this.state.clients.map(client => (
                                <ClientRow
                                    key={client.id}
                                    id={client.id}
                                    firstName={client.firstName} lastName={client.lastName}
                                    email={client.email}
                                    phone={client.phone}
                                    streetAddress={client.streetAddress}
                                    aptUnitNum={client.aptUnitNum}
                                    city={client.city}
                                    state={client.state}
                                    zip={client.zip}
                                    created={client.createdAt}
                                    setClientResults={this.props.setClientResults}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }

}

export default Clients