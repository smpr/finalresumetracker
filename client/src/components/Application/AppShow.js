import React, { Component } from 'react';
import axios from 'axios'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class AppShow extends Component {
    state = {
        applications: {}
    }
    async componentWillMount() {
        try {
            const resumeId = this.props.match.params.appId

            const applications = await axios.get(`/api/resumes/${resumeId}`)
            this.setState({ applications: applications.data })
            console.log(this.state.applications)

        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <ul>
                            <li>
                                <b>Company: </b> {this.state.applications.company}
                            </li>
                            <li>
                                <b>Job Title: </b> {this.state.applications.title}
                            </li>
                            <li>
                                <b>Req Number: </b> {this.state.applications.req}
                            </li>
                            <li>
                                <b>Date Applied: </b> {this.state.applications.date}
                            </li>
                            <li>
                                <b>Accepted/Rejected: </b> {this.state.applications.ar}
                            </li>
                            <li>
                                <b> Notes: </b> {this.state.applications.notes}
                            </li>
                        </ul>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default AppShow;