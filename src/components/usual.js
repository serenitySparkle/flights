import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserForm from './UserForm'
import {Row, Col, Alert} from 'react-bootstrap/'
import {sendSignUpRequest} from '../actions'

import sha256 from 'crypto-js/sha256'
import hmacSHA512 from 'crypto-js/hmac-sha512'
import Base64 from 'crypto-js/enc-base64'

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      file: "",
      age: "",
      gender: "",
      token: "",
      loading: false
    }
  }

    generateToken () {
        const {fname, lname, email, password, age, gender} = this.state;
        const hashVal = sha256(email+password);
        const hmacVal = Base64.stringify(hmacSHA512(fname + lname + email + password + age + gender, hashVal));
        return hmacVal;
    }

    static getDerivedStateFromProps (nextProps, prevState){
        if (nextProps.loading !== prevState.loading)
            return {loading: nextProps.loading};
        return null;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.loading !== this.props.loading){
          this.setState({loading: this.props.loading});
        }
      }

    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value,
        token: this.generateToken()
        });
    }

    handleFileChange = file => {
        this.setState({
            file: file
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.sendSingUpRequest(this.state)

    }

    render() {
        const {loading, token} = this.state;
        const {status, message} = this.props;
        return (
            <Row className="App-container">
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
            <Alert variant={status} show={message !== ''}>{message}</Alert>
                <UserForm token={token} submitHandler={this.handleSubmit} onFileChange={this.handleFileChange} onValueChange={this.handleChange} buttonDisabled={loading}/>
            </Col>
          <Col xs={0} md={3}></Col>
        </Row>)
    }
}

const mapDispatchToProps = dispatch => ({
  sendSingUpRequest: userInfo => dispatch(sendSignUpRequest(userInfo)),
})

const mapStateToProps = state => ({
  loading: state.loading,
  status: state.status,
  message: state.message
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);