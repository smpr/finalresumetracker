import React, { Component } from 'react';
import axios from 'axios'
class AppHome extends Component {
    state = {
        applications: []
            }
            async componentWillMount() {
                try {
        
                    const applications = await axios.get(`/api/applications`)
                    this.setState({ applications: applications.data })
                    console.log(this.state.applications)
        
                } catch (error) {
                    console.log(error)
                }
        
            }
    render() {
        return (
            <div>
                Application home
            </div>
        );
    }
}

export default AppHome;