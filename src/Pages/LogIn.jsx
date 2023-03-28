import { useContext } from "react";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App.js";
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col, Form } from "react-bootstrap"
import '../assets/css/styleLogIn.css'
import FooterBar from '../components/FooterBar'
// import logo from '../assets/images/full/logo.jpg'

const LogIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const Context = useContext(AppContext);
  let navigasi = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let u = e.target.username.value;
    let p = e.target.password.value;
    let cek_login = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: u,
        password: p,
        // expiresInMins: 60, // optional
      })
    })
      .then(res => res.json())
      .then(hasil => { return hasil });
    if (cek_login.username === undefined)
      alert('Login gagal, username atau password salah');
    else {
      Context.setUser(cek_login);
      navigasi('/');
    }
  }

  return (
    <div>
      <NavigationBar />
      <Container className='box'>
        <Row>
          <Col>
            {/* <img className='mb-4 text-center' src={logo} alt="" width="72" height="72"></img> */}
            <h2 className='h3 mb-3 font-weight-normal text-center' style={{ marginTop: '110px' }}>Please Sign In</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} className='form-signin'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control input className='form-control' type='text' placeholder='Username' name='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <Row />
                <Col />
              </Form.Group>
              <Form.Group>
                <Form.Control input className='form-control' type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3 mx-auto" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
                <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign In</button>
            </Form>
          </Col>
        </Row>

      </Container>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <FooterBar />
    </div>
  )
}

export default LogIn