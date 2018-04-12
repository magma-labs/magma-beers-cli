import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module
import {Button, Icon, Row, Input} from 'react-materialize'

class SignInScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('andleChange')
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit (e) {
    e.preventDefault()
    const { signInUser } = this.props
    const {
      email,
      password,
    } = this.state
    console.log(this.props)
    console.log(password)
    signInUser({ email, password }) // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then((response) => {
        alert(response)
      })
      .catch((error) => {
        alert(error)
      })
  }

  render () {
    const { handleSubmit } = this
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Input type="email" name='email' label="Email" s={12}
              onChange={this.handleChange} />
            <Input type="password" name='password' label="password" s={12}
              onChange={this.handleChange} />
            <Button waves='light'>button</Button>
          </Row>
        </form>
      </div>
    )
  }
}

export default connect(
    null,
    { signInUser },
)(SignInScreen)
