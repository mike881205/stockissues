import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header"
import AssessQuestion from "../../components/AssessQuestion"
import AssessSection from "../../components/AssessSection"
import Footer from "../../components/Footer"
import "./style.css"

class ClientResults extends Component {

    state = {
        sections: []
    }

    resultsArr = []

    buildClientResults = () => {

        let ClientId = this.props.clientResults[0]

        API.getClientResults(ClientId)
            .then(res => {
                this.setState({ sections: res.data })
            })
            .catch(err => {
                console.log(err);
            });

    }

    componentDidMount() {
        this.buildClientResults()
    }

    render() {
        return (
            <div>
                <Header/>
                {this.state.sections.map((section, index) => (
                    <React.Fragment>
                        {console.log(section.SectionId === this.state.sections[index].SectionId)}
                        {index > 0 && section.SectionId === this.state.sections[index - 1].SectionId ? (
                            section.Section.Questions.map(question => (
                                question.id === section.QuestionId ? (<AssessQuestion
                                    key={question.id}
                                    id={question.id}
                                    section={question.SectionId}
                                    question={question.question}
                                    response={section.response}
                                    observation={section.observation}
                                    comment={section.comment}
                                    className="questions"
                                />) : ("")
                            ))
                        ) : (
                            <AssessSection key={section.SectionId} id={section.SectionId} section={section.Section.section} showNAbox={false}>
                                {section.Section.Questions.map(question => (
                                    question.id === section.QuestionId ? (
                                        <AssessQuestion
                                            key={question.id}
                                            id={question.id}
                                            section={question.SectionId}
                                            question={question.question}
                                            response={section.response}
                                            observation={section.observation}
                                            comment={section.comment}
                                            className="questions"
                                        />
                                    ) : ("")
                                ))}
                            </AssessSection>
                        )}
                    </React.Fragment>
                ))}
                <Footer/>
            </div>
        )
    }

}

export default ClientResults