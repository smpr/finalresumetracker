import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class CompHome extends Component {
    state = {
        companies: []
    }
    async componentWillMount() {
        try {

            const company = await axios.get(`/api/companies`)
            this.setState({ companies: company.data })
            console.log(this.state.companies)

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
                    {this.state.companies.map((company, index) => {
                        return (
                            <div>
                                <Link to={`/Company/${company.id}`}>{company.name}</Link>
                            </div>
                        )
                    })}
                    
                </ul>
                </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default CompHome;