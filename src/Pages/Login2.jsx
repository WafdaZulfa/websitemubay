import React from 'react'
import {Button, Form} from 'react-bootstrap'

const Login2 = () => {
    const clickLogIn = (e) => {
        e.preventDefault();
        let u = e.target.username.value;
        let p = e.target.pass.value;

        alert('Username: '+u+' Password: '+p)
    }
  return (
    <Form onSubmit={clickLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name='username' placeholder="Username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='pass' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default Login2