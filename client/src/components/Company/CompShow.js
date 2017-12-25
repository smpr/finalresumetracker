import React, { Component } from 'react';

class CompShow extends Component {
    render() {
        return (
            <div>
                Company Show for ID {this.props.match.params.compId}
            </div>
        );
    }
}

export default CompShow;