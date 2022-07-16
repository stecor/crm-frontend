import React from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ResetPassword = ({ handleOnChange, handleOnSubmit, email }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <br />
            {/* Email form */}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={handleOnChange}
                placeholder='Enter Email'
                required
              />
            </Form.Group>

            <Button type='submit'>Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='#!'>Login</a>
        </Col>
      </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}

export default ResetPassword
