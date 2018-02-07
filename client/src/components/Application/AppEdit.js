import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class AppEdit extends Component {
    state = {
        application: {
            ar: '',
            company: '',
            date: 0,
            notes: "",
            req: '',
            title: ''
        },
        redirectToApplication: false
    }
    async componentWillMount() {
        try {
            const appId = this.props.match.params.appId
            const application = await axios.get(`/api/resumes/${appId}`)
            this.setState({ application: application.data })
            console.log(application.data)
        } catch (error) {
            console.log(error)
        }

    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedApplication = { ...this.state.application }
        clonedApplication[attribute] = event.target.value
        this.setState({ application: clonedApplication })
    }
    editApp = async () => {
        const appId = this.props.match.params.appId
        const res = await axios.patch(`/api/resumes/${appId}`, {
            company: this.state.application,


        })
        this.setState({ application: res.data, redirectToApplication: true })
    }
    deleteApp = async () => {
        const appId = this.props.match.params.appId
        await axios.delete(`/api/resumes/${appId}`)
        this.setState({ redirectToApplication: true })
    }
    render() {
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <br />
                            <h2><b>Edit Company</b></h2>
                            <br />
                            <TextField
                                hintText="Name"
                                floatingLabelText="Company Name"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="company"
                                type="text"


                                value={this.state.application.company}
                            />

                            <div>
                                <TextField
                                    hintText="Job Title"
                                    floatingLabelText="Job Title"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="title"
                                    type="text"


                                    value={this.state.application.title}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Reference Number"
                                    floatingLabelText="Reference Number"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="req"
                                    type="text"


                                    value={this.state.application.req}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Date Submited"
                                    floatingLabelText="Date Submited"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="date"
                                    type="date"


                                    value={this.state.application.date}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Accept/Reject"
                                    floatingLabelText="Accept/Reject"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="ar"
                                    type="text"


                                    value={this.state.application.ar}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Notes"
                                    floatingLabelText="Notes"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="notes"
                                    type="text"


                                    value={this.state.application.notes}
                                />
                            </div>

                            <RaisedButton onClick={this.deleteApp} label="Delete" style={Style} />
                            <RaisedButton onClick={this.editApp} label="Edit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>

        );
    }
}

export default AppEdit;