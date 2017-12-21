import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <div>
                <a href="/Application">Applications</a>
                <a href="/Company">Companies</a>
            </div>
        );
    }
}

export default NavBar;