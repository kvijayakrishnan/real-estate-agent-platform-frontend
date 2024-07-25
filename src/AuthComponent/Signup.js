import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthCss/Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password:'',
    })

    const handleSubmit = async(event) =>{
      event.preventDefault();
      const newUser = {...userData};
      try {
        const response = await axios.post('https://real-estate-agent-platform-backend.onrender.com/api/register', newUser)
        if(response){
          setUserData({
            name:'',
            email:'',
            password:''
          });
          navigate('/login')
        }
      } catch (error) {
        console.log('Error while registration user')
      }
    }

  const handleForm = (value) =>{
    return setUserData(user =>{
      return{...user, ...value}
    })
  }


  return (
    <Container>
      <h1>Register Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name' placeholder='Enter Your Name' value={userData.name} onChange={(e) => handleForm({name:e.target.value})} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' name='email' placeholder='Enter Your Email' value={userData.email} onChange={(e) =>handleForm({email:e.target.value})} required  />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' placeholder='Enter your password' value={userData.password} onChange={(e) => handleForm({password:e.target.value})} required />
        </Form.Group>
        <Button variant='primary' type='submit' >Register</Button>
        <p>Already Have a account <Link to='/login'>Login</Link></p>
      </Form>
    </Container>
  )
}

export default Signup