import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import "./style.css";

class QuestionInput extends Component {
    state = {
        section: "",
        question: ""
    };

    inputQuestion = event => {
        event.preventDefault();
        API.inputQuestion({
            section: this.state.section,
            question: this.state.question
        })
            .then(
                console.log("question added")
            )
            .catch(err => {
                console.log(err);
            });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value.trim()
        });
    };

    render() {
        return (
            <Container
                classes="questionContainer"
            >
                <form>
                    <FormGroup>
                        <Label text="section" />
                        <Input
                            name="section"
                            value={this.state.section}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="question" />
                        <Input
                            name="question"
                            value={this.state.question}
                            onChange={this.handleInputChange}
                            type="question"
                        />
                    </FormGroup>
                    {this.state.error ? <Small text={this.state.error} /> : ""}
                    <FormBtn
                        disabled={
                            this.state.section && this.state.question ? "" : "disabled"
                        }
                        text="Submit"
                        onClick={this.inputQuestion}
                        classes="btn-primary"
                    />
                </form>
            </Container>
        );
    }
}

export default QuestionInput;
