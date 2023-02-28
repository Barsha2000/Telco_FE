import React from 'react'
import './login.css'
import Navbar1 from '../../components/Navbar1'
import {Button,Form} from 'reactstrap'
import { useState } from 'react'
import axios from 'axios'
import user_base_url from '../../services/Helper'
import { useNavigate } from "react-router-dom";


import{ toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import jwt_decode from "jwt-decode";
import {
    
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }

  from 'mdb-react-ui-kit';



const Login = () => {
    
  const [user,setUser]= useState({});
  const navigate = useNavigate();
    const handleForm=(e)=>   {
        console.log(user);
        savelogin(user)
        e.preventDefault();
    }
    const savelogin=(data)=> {
        axios.post(`${user_base_url}/auth/login`,data).then(
            (response)=>{
                console.log(response);
                const {accessToken,email} = response.data;
                var token= localStorage.setItem("token",accessToken)
        var decoded = jwt_decode(localStorage.getItem('token'));
        const uid = decoded.sub[0];
        localStorage.setItem("userId",uid);
      
         console.log(decoded.sub[0]);
               toast.success("LoggedIn");
               navigate("/");
            },
            
            (error)=>{
                console.log(error);
                toast.error(" Not LoggedIn")
            } 
        )
      
    }

  
  
  return (
    <div>
        <Navbar1></Navbar1>
        <ToastContainer></ToastContainer>
  
<MDBContainer className="my-5">

      <MDBCard >
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>
          
          <MDBCol md='6'>
            <MDBCardBody  className='d-flex flex-column' >

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              <Form onSubmit={handleForm}>
                
                <MDBInput  wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>{
                      setUser({...user,email:e.target.value})}}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>{
                      setUser({...user,password:e.target.value})}}/>

              <Button className="mb-4 px-5" color='dark' size='lg' > 
                    <a  className="v1 ">
                              Log In</a> </Button>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/register" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a className="small text-muted me-1">Terms of use.</a>
                <a  className="small text-muted">Privacy policy</a>
              </div>
              </Form>
              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>


</div>
  )
}

export default Login




















