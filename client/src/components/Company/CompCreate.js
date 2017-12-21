import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class CompCreate extends Component {
    state = {
        company: {
            name: "",
            address: "",
            city: "",
            state:"",
            zip: 0,
            phone: 0,
            logo: "Blank",
            industry:"",


        },
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
        const updateCompany = {
            ...this.state.company
        }
        updateCompany[event.target.name] = event.target.value
        this.setState({ company: updateCompany })
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/companies/`, { company: this.state.company })
        this.setState({ redirectToHome: true })

    }
    render() {
        // if (!localStorage['access-token']) {
        //     return <Redirect to='/user/create' />
        // }
        const page1 =
        <BodyContainer>
            <Container>
                <FormContainer>
                    <div>
                        <h2><b>Create Company</b></h2>
                    </div>
                    <div>
                        <TextField
                            hintText="Company Name"
                            floatingLabelText="Company Name"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            required

                            value={this.state.company.name}
                        />

                    </div>
                    <div>
                        <TextField
                            hintText="Industry"
                            floatingLabelText="Industry"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="industry"
                            type="text"
                            required

                            value={this.state.company.idustry}
                        />

                    </div>
                    <div>
                        <TextField
                            hintText="Company Phone Number"
                            floatingLabelText="Company Phone Number"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="phone"
                            type="number"
                            required

                            value={this.state.company.phone}
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
                            hintText="Address"
                            floatingLabelText="Address"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="address"
                            type="text"
                            required

                            value={this.state.company.address}
                        />

                    </div>
                    <div>
                        <TextField
                            hintText="City"
                            floatingLabelText="City"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="city"
                            type="text"
                            required

                            value={this.state.company.city}
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
                            hintText="State"
                            floatingLabelText="State"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="state"
                            type="text"
                            required

                            value={this.state.company.state}
                        />

                    </div>
                    <div>
                        <TextField
                            hintText="Zip"
                            floatingLabelText="Zip"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="zip"
                            type="number"
                            required

                            value={this.state.company.zip}
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
                        Company Name: {this.state.company.name}
                    </div>
                    <div>
                        Industry: {this.state.company.industry}
                    </div>
                    <div>
                        Phone Number: {this.state.company.phone}
                    </div>
                    <div>
                        Address: {this.state.company.address}
                    </div>
                    <div>
                        City: {this.state.company.city}
                    </div>
                    <div>
                        State: {this.state.company.state}
                    </div>
                    <div>
                        Zip: {this.state.company.zip}
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
export default CompCreate;