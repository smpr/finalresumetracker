import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AppCreate extends Component {
    state = {
        application: {
            company: "",
            req: "",
            title: "",
            date:"",
            ar: "",
            notes: "",
              }
            ,
            redirectToHome: false,
            togglePage2: false,
            togglePage3: false,
            togglePage4: false,
            togglePage5: false,
            togglePage6: false,
            toggleConirm: false,
        }
        promptToSecondForm = (event) => {
            this.setState({
                togglePage2: true
            })
    
        }
        promptToThirdForm = (event) => {
            this.setState({
                togglePage2: false,
                togglePage3: true
            })
    
        }
        promptToFourthForm = (event) => {
            this.setState({
                togglePage3: false,
                togglePage4: true
            })
    
        }
        handleChange = (event) => {
            const updateResume = {
                ...this.state.application
            }
            updateResume[event.target.name] = event.target.value
            this.setState({ application: updateResume })
        }
        // this handles the submit function specifically setup on the back end to allow this route directly
        handleSubmit = async (event) => {
            event.preventDefault()
            await axios.post(`/api/resumes/`, { application: this.state.application })
            this.setState({ redirectToHome: true })
    
        }
    render() {
        const page1 =
        <BodyContainer>
            <Container>
                <FormContainer>
                    <div>
                        <h2><b>Create Resume</b></h2>
                    </div>
                    <div>
                        <TextField
                            hintText="Company Name"
                            floatingLabelText="Company Name"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="company"
                            type="text"
                            required

                            value={this.state.application.company}
                        />

                    </div>
                    <div>
                        <TextField
                            hintText="Date"
                            floatingLabelText="Date"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="date"
                            type="date"
                            required

                            value={this.state.application.date}
                        />

                    </div>
                   
                    <div>
                        <RaisedButton onClick={this.promptToSecondForm} label="Next" style={Style} />
                    </div>
                </FormContainer>
            </Container>
        </BodyContainer>
        const page2 =
        <BodyContainer>
            <Container>
                <FormContainer>
                    <div>
                        <TextField
                            hintText="Job Title"
                            floatingLabelText="Job Title"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="title"
                            type="text"
                            required

                            value={this.state.application.title}
                        />

                    </div>
                    <div>
                        <TextField
                            hintText="Job Number"
                            floatingLabelText="Job Number"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="req"
                            type="text"
                            required

                            value={this.state.application.req}
                        />

                    </div>
                    <div>
                        <RaisedButton onClick={this.promptToThirdForm} label="Next" style={Style} />
                    </div>
                </FormContainer>
            </Container>
        </BodyContainer>
    const page3 =
        <BodyContainer>
            <Container>
                <FormContainer>
                    <div>
                        <TextField
                            hintText="Accept/Rejected Offer"
                            floatingLabelText="Accept/Rejected Offer"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="ar"
                            type="text"
                            required

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
                            required

                            value={this.state.application.notes}
                        />

                    </div>


                    <div>
                        <RaisedButton onClick={this.promptToFourthForm} label="Next" style={Style} />
                    </div>
                </FormContainer>
            </Container>
        </BodyContainer>
    const page4 =
        <BodyContainer>
            <Container>
                <FormContainer>
                    <div>
                        <h2>Please Verify Info</h2>
                    </div>
                    <div>
                        Company Name: {this.state.application.company}
                    </div>
                    <div>
                        Resume Date: {this.state.application.date}
                    </div>
                    <div>
                        Job Title: {this.state.application.title}
                    </div>
                    <div>
                        Job Number: {this.state.application.req}
                    </div>
                    <div>
                        Company Accepted/Rejected: {this.state.application.ar}
                    </div>
                    <div>
                        Notes: {this.state.application.notes}
                    </div>
                   
                   
                    <div>
                        <RaisedButton onClick={this.handleSubmit} label="Submit" style={Style} />
                    </div>
                </FormContainer>
            </Container>
        </BodyContainer>

    
        const moveAlong =
    
            <Redirect to={`/Test`} />
    
            if (this.state.redirectToInfoHome) {
                return <Redirect to={`/Users/Home`} />
            }
            const userView =
                this.state.togglePage2 ? page2
                    : this.state.togglePage3 ? page3
                        : this.state.togglePage4 ? page4
                            : this.state.togglePage6 ? moveAlong
                                : page1
        return (
            <div>
                 {userView}
            </div>
        );
    }
}

export default AppCreate;