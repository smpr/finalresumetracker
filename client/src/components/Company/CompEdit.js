import React, { Component } from 'react';
import axios from 'axios'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CompEdit extends Component {
    state = {
        company:{
            address: '',
            city: '',
            industry: '',
            logo: '',
            name: '',
            phone: 0,
            state: '',
            zip: 0
        },
        redirectToCompany: false
    }
    async componentWillMount() {
        try {
            const compId = this.props.match.params.compId
            const company = await axios.get(`/api/companies/${compId}`)
            this.setState({ company: company.data })
            console.log(company.data)
        } catch (error) {
            console.log(error)
        }

    }
    editStep = async () => {
        const compId = this.props.match.params.compId
        const res = await axios.patch(`/api/companies/${compId}`, {
            company: this.state.company,


        })
        this.setState({ company: res.data, redirectToCompany: true })
    }
    deleteStep = async () => {
console.log("Delete Test")
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedCompany = { ...this.state.company }
        clonedCompany[attribute] = event.target.value
        this.setState({ company: clonedCompany })
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
                                name="Name"
                                type="text"


                                value={this.state.company.name}
                            />

                            <div>
                                <TextField
                                    hintText="Number"
                                    floatingLabelText="Phone Number"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="phone"
                                    type="number"


                                    value={this.state.company.phone}
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


                                    value={this.state.company.industry}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Address"
                                    floatingLabelText="Address"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="address"
                                    type="text"


                                    value={this.state.company.phone}
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


                                    value={this.state.company.city}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="State"
                                    floatingLabelText="State"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="state"
                                    type="text"


                                    value={this.state.company.state}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Zip"
                                    floatingLabelText="Zipcode"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="zip"
                                    type="number"


                                    value={this.state.company.phone}
                                />
                            </div>
                            <RaisedButton onClick={this.deleteStep} label="Delete" style={Style} />
                            <RaisedButton onClick={this.editStep} label="Edit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default CompEdit;