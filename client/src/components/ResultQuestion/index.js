import React from "react";

class ResultQuestion extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <p>{this.props.question}</p>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default ResultQuestion