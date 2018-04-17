import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module

class RegisterScreen extends Component {
    constructor (props) { ... }

    ...

      submitForm (e) {
            e.preventDefault()
            const { registerUser } = this.props
            const {
                    email,
                    firstName,
                    password,
                  } = this.state
            registerUser({ email, firstName, password }) // <-<-<-<-<- here's the important part <-<-<-<-<-
              .then(...)
              .catch(...)
          }

    render () {
          const { submitForm } = this
          <div>
                  <form onSubmit={submitForm}>...</form>
                      </div>
          }
}

export default connect(
    null,
    { registerUser },
)(RegisterScreen)
