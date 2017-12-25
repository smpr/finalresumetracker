import React, { Component } from 'react';
import axios from 'axios'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CompShow extends Component {
    state = {
        company: {}
    }
    async componentWillMount() {
        try {
            const compId = this.props.match.params.compId
            const company = await axios.get(`/api/companies/${compId}`)
            this.setState({ company: company.data })
            console.log(this.state.company)

        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <b>Company Name: </b>{this.state.company.name}
                        </div>
                        <div>
                            <b>Phone Number: </b>{this.state.company.phone}
                        </div>
                        <div>
                            <b>Industry: </b>{this.state.company.industry}
                        </div>
                        <div>
                            <b>Address: </b>{this.state.company.address}
                        </div>
                        <div>
                            <b>City: </b>{this.state.company.city}
                        </div>
                        <div>
                            <b>State: </b>{this.state.company.state}
                        </div>
                        <div>
                            <b>Zip: </b>{this.state.company.zip}
                        </div>
                        
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default CompShow;