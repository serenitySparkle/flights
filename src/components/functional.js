import React from 'react'
import {Form, Button, Col} from 'react-bootstrap/'
import PropTypes from 'prop-types'

export default function UserForm(props) {
        const {submitHandler, onValueChange, buttonDisabled} = props;
        return (<Form className="user-form" onSubmit={submitHandler}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" name="email" placeholder="john.smith@company.com" onChange={onValueChange}/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" name="password" placeholder="Password" onChange={onValueChange}/>
              </Form.Group>
            </Form.Row> 
            <Form.Group>
                <Form.Check type="checkbox" label="Multi-time" name="multi" onChange={onValueChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Expires in</Form.Label>
                <Form.Control as="select" name="expiry" onChange={onValueChange}>
                  <option>1 Minute</option>
                  <option>5 minutes</option>
                  <option>10 minutes</option>
                  <option>1 day</option>
                  <option>1 year</option>
                </Form.Control>
              </Form.Group>
              
            <Button variant="primary" type="submit" disabled={buttonDisabled}>
                Submit
            </Button>
          </Form>)

    }  
UserForm.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    buttonDisabled: PropTypes.bool,
  }