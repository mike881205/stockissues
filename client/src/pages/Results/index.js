import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header"
import ResultSection from "../../components/ResultSection"
import ResultQuestion from "../../components/ResultQuestion"
import ResultResponses from "../../components/ResultResponses"

class Results extends Component {

    state = {
        sections: []
    }

    resultArry = this.props.results
    resultSections = []
    fullResults = []

    buildResults = () => {

        API.getSections()
            .then(res => {
                this.setState({ sections: res.data })
                const { sections } = this.state
                for (let i = 0; i < this.resultArry.length; i++) {
                    let sectionID = this.resultArry[i].SectionId
                    for (let j = 0; j < sections.length; j++) {
                        if (sectionID === sections[j].id) {
                            this.resultSections.push(sections[j])
                            for (let k = 0; k < this.resultSections.length; k++) {
                                if (this.resultSections[k + 1] === this.resultSections[k]) {
                                    this.resultSections.splice(k + 1)
                                }
                            }
                        }
                    }
                }
                for (let i = 0; i < this.resultSections.length; i++) {
                    let resultsObj = {
                        section: "",
                        questions: []
                    }
                    resultsObj.section = this.resultSections[i].section
                    for (let j = 0; j < this.resultSections[i].Questions.length; j++) {
                        for (let k = 0; k < this.resultArry.length; k++) {
                            if (this.resultArry[k].QuestionId === this.resultSections[i].Questions[j].id) {
                                let questObj = {
                                    question: "",
                                    responses: []
                                }
                                questObj.question = this.resultSections[i].Questions[j].question
                                let resObj = {
                                    response: "",
                                    observation: "",
                                    comment: ""
                                }
                                resObj.response = this.resultArry[k].response
                                resObj.observation = this.resultArry[k].observation
                                resObj.comment = this.resultArry[k].comment
                                questObj.responses.push(resObj)
                                resultsObj.questions.push(questObj)
                            }
                        }
                    }
                    this.fullResults.push(resultsObj)
                }

                console.log(this.fullResults)

                this.setState({ sections: this.fullResults })

            })
            .catch(err => {
                console.log(err);
            });
    };

    componentDidMount() {
        this.buildResults()
    }

    render() {
        return (
            <div>
                <Header />
                {this.fullResults.map(section => (
                    <ResultSection section={section.section}>
                        {section.questions.map(question => (
                            <ResultQuestion question={question.question}>
                                {question.responses.map(response => (
                                    <ResultResponses
                                        response={response.response}
                                        observation={response.observation}
                                        comment={response.comment}
                                    />
                                ))}
                            </ResultQuestion>
                        ))}
                    </ResultSection>
                ))}
            </div>
        );
    }

}

export default Results;