import React, { Component } from 'react';
import axios from 'axios'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "./util/SessionHeaderUtil"

class App extends Component {
  state = {
    redirectToLogin: false,
    signedIn: false,

  }
  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()

      let categories = []
      if (signedIn) {
        setAxiosDefaults()
        categories = await this.getCategories()
      }

      this.setState({
        categories,
        signedIn


      })
    } catch (error) {
      console.log(error)
    }
  }
  //this is devise sign up that will be passed down via props
  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)

      saveAuthTokens(response.headers)

      this.setState({
        signedIn: true,
      })

    } catch (error) {
      console.log(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)
      this.setState({
        signedIn: true,

      })

    } catch (error) {
      console.log(error)
    }
  }
  signOut = async (event) => {
    try {
      event.preventDefault()

      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
<div>
  </div>
    );
  }
}

export default App;
