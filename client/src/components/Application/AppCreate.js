import React, { Component } from 'react';
import axios from 'axios'
class AppCreate extends Component {
    state = {
        application: {
            company: "",
            req: "",
            title: "",
            date:"",
            ar: "",
            notes: "",
              }
            }
    render() {
        return (
            <div>
                Application Create
            </div>
        );
    }
}

export default AppCreate;