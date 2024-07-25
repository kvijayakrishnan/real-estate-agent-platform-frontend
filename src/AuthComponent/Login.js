import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthCss/Login.css';
import { json, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email:'',
    pasword:''
  })

  const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name, value} =e.target;
    setFormData({...formData, [name] :value})
  }

  const handleSubmit = async(e) =>{
    e.perventDefault();
    try {
      const responce = await axios.post(`https://real-estate-agent-platform-backend.onrender.com/api/login`, formData)
      console.log(responce);
      if(responce.data.msg === "Invalid credentials"){
        alert('Invalid credentials')
      }else {
        localStorage.setItem("userInfo", JSON.stringify(responce.data))
        navigate('/home')
      }
      
    } catch (error) {
      console.log("Error during login", error)
    }
  }


  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange} required />
          <p>Eg : vijaykrishnanbk@gmail.com</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='text' name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange} required />
          <p>Eg : 123456789</p>
        </Form.Group>
        <Button variant='primary' type='submit' >Login</Button>
      </Form>
    </Container>
  )
}

export default Login