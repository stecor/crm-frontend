import React from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const Login = ({ handleChange, email, password }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Client Login</h1>
          <hr />
          <Form>
            <br />
            {/* Email form */}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Enter Email'
                required
              />
            </Form.Group>
            {/* Password form */}
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Enter Password'
                required
              />
            </Form.Group>
            <br />
            <Button type='submit'>Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Col>
        <a href='#!'>Forget Password?</a>
      </Col>
      <Row></Row>
    </Container>
  )
}

export default Login
