import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Header from "../../components/Header"
import Jumbotron from "../../components/Jumbotron"
import Footer from "../../components/Footer"
import "./style.css"

class Confirmation extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Redirect to="/clients" />
            :
            <div>
                <Header />
                <Jumbotron>
                    <div className="jContent">
                        <div className="row">
                            <div className="col-sm">
                                <h3>Assessment Submitted</h3>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-sm">
                                <p>You will be redirected to the clients page shortly</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Footer/>
            </div>
    }

}

export default Confirmation