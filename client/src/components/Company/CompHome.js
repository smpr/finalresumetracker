import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                <ul>
                    {this.state.companies.map((company, index) => {
                        return (
                            <div>
                                <Link to={`/Company/${company.id}`}>{company.name}</Link>
                            </div>
                        )
                    })}
                    
                </ul>
                meh
            </div>
        );
    }
}

export default CompHome;