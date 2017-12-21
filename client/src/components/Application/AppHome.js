import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
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
            <div>
                <ul>
                    {this.state.applications.map((application, index) => {
                        return (
                            <div>
                                <Link to={`/application/${application.id}`}>{application.title}</Link>
                            </div>
                        )
                    })}
                    
                </ul>
                meh
            </div>
        );
    }
}

export default AppHome;