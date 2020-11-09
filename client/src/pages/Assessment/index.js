import React, { Component } from "react";
import API from "../../utils/API";
import AssessSection from "../../components/AssessSection"
import AssessQuestion from "../../components/AssessQuestion"
import Header from "../../components/Header"
import Jumbotron from "../../components/Jumbotron";
import { Redirect } from 'react-router-dom'
import Footer from "../../components/Footer"
import "./style.css"

class Assessment extends Component {
    state = {
        sections: [],
        resultsSubmitted: false
    };


    buildAssessment = () => {
        API.getSections()
            .then(res => {
                this.setState({ sections: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let responses = [];

        for (let i = 0; i < event.target.length; i++) {

            let question = {
                ClientId: this.props.clientID,
                SectionId: "",
                QuestionId: "",
                response: "",
                observation: "",
                comment: ""
            }
            let name = event.target[i].name
            let splitName = name.split("-")
            let category = splitName[2]

            if (name) {

                if (category === "response") {
                    question.response = event.target[i].value
                }
                if (category === "observation") {
                    question.observation = event.target[i].value
                }
                if (category === "comment") {
                    question.comment = event.target[i].value
                }

                question.SectionId = parseInt(splitName[0])
                question.QuestionId = parseInt(splitName[1])
                responses.push(question);
            }
        }

        let submission = []

        for (let i = 0; i < responses.length; i++) {

            if (responses[i].response !== "Response" && responses[i].response !== "") {
                responses[i].observation = responses[i + 1].observation
                responses[i].comment = responses[i + 2].comment
                submission.push(responses[i])
            }
        }

        for (let i = 0; i < submission.length; i++) {

            API.submitAssessment({
                ClientId: this.props.clientID,
                SectionId: submission[i].SectionId,
                QuestionId: submission[i].QuestionId,
                response: submission[i].response,
                observation: submission[i].observation,
                comment: submission[i].comment
            })
                .then(res => {
                    this.props.setResults(submission)
                    this.setState({ resultsSubmitted: true })
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }


    componentDidMount() {
        this.buildAssessment()
    }

    render() {
        if (!this.state.resultsSubmitted) {
            return (
                <div>
                    <Header />
                    <Jumbotron>
                        <div className="row">
                            <div className="col-sm">
                                <h3>Home Assessment</h3>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm text-left">
                                <ul className="instructions">
                                    <li>
                                        <p>Scroll down below to begin the assessment. Each question will have a response, observation, and comment.</p>
                                    </li>
                                    <li>
                                        <p>Select a response for each question. If the responses "Yes" or "No" do not apply to the question, select "N/A" as your response.</p>
                                    </li>
                                    <li>
                                        <p>Observations should include specific notes regarding the current question, e.g., "The slope of the driveway is 20 degrees" .</p>
                                    </li>
                                    <li>
                                        <p>In the comments field, please add any additional notes regarding the section/question that may be relevant when summarizing the report.</p>
                                    </li>
                                    <li>
                                        <p>If a section/questions are not applicable to this assessment, click the "N/A" checkbox to remove that section from the assessment. Uncheck the box to include them.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Jumbotron>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.sections.map(section => (
                            <AssessSection key={section.id} id={section.id} section={section.section} notApplicable={this.notApplicable} showNAbox={true}>
                                {section.Questions.map(question => (
                                    <AssessQuestion
                                        key={question.id}
                                        id={question.id}
                                        section={question.SectionId}
                                        question={question.question}
                                        className="questions"
                                    />
                                ))}
                            </AssessSection>
                        ))}
                        <button type="submit" className="btn btn-primary btn-lg">Submit Assessment</button>
                    </form>
                    <Footer/>
                </div>
            );
        } else {
            return (
                <Redirect to="/confirmation" />
            )
        }

    }
}

export default Assessment;
