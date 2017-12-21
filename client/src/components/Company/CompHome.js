import React, { Component } from 'react';
import axios from 'axios'

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
            <div>
                Company Home
            </div>
        );
    }
}

export default CompHome;