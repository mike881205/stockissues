import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./style.css"

class Header extends Component {
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-expand-lg d-flex justify-content-center head">
                    <h3>Golden Age Living</h3>
                </nav> */}

                <nav class="navbar navbar-expand-lg d-flex justify-content-center head">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg">
                            <img src="https://www.goldenageliving.com/wp-content/uploads/2017/11/Goldenageliving-logo-web.jpg" className="rounded mx-auto d-block GALimg" alt="logo"></img>
                        </div>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">Nav</span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <Link to="/home">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <Link to="/clientinput">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">New Assessment <span class="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <Link to="/clients">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Clients <span class="sr-only">(current)</span></a>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Header