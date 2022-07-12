import React from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          <Form>
            <br />
            {/* Email form */}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
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
                placeholder='Enter Password'
                required
              />
            </Form.Group>
            <br />
            <Button type='submit'>Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
