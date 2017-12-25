import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class AppHome extends Component {
    state = {
        applications: []
    }
    async componentWillMount() {
        try {

            const applications = await axios.get(`/api/resumes`)
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
                    {this.state.applications.map((application, index) => {
                        return (
                            <div>
                                <Link to={`/application/${application.id}`}>{application.title}</Link>
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

export default AppHome;