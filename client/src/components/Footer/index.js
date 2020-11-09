import React, { Component } from "react";
import "./style.css"

class Footer extends Component {
    render() {
        return (
            <div class="footer footContent">
                <div className="row">
                    <div className="col-sm">
                        <h5>888-607-4650</h5>
                    </div>
                    <div className="col-sm">
                        <a className="email" href="mailto:wegcaps@att.net">
                            <h5>wegcaps@att.net</h5>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer