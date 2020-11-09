import React from "react";
import "./style.css"

class AssessQuestion extends React.Component {
    render() {
        return (
            <div className="row text-center" data-aos="fade-right">
                <div className="col-sm-3 resQ">
                    <p>{this.props.question}</p>
                </div>

                {this.props.response ? (
                    <React.Fragment>
                        <div className="col-sm-3">
                            <p>{this.props.response}</p>
                        </div>
                        <div className="col-sm-3">
                            <p>{this.props.observation}</p>
                        </div>
                        <div className="col-sm-3">
                            <p>{this.props.comment}</p>
                        </div>
                    </React.Fragment>
                ) : (
                        <React.Fragment>
                            <div className="col-sm-3 dropdown">
                                <select
                                    className="form-control" name={`${this.props.section}-${this.props.id}-response`}>
                                    <option defaultValue="" disabled selected>Response</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                    <option>N/A</option>
                                </select>
                            </div>
                            <div className="col-sm-3 form-group">
                                <input type="observation" className="form-control" id="observation" placeholder="Observation" name={`${this.props.section}-${this.props.id}-observation`}></input>
                            </div>
                            <div className="col-sm-3 form-group">
                                <input type="comment" className="form-control" id="comment" placeholder="Comment" name={`${this.props.section}-${this.props.id}-comment`}></input>
                            </div>
                        </React.Fragment>
                    )}
            </div>
        );
    }
}

export default AssessQuestion