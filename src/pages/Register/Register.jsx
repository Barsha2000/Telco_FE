import React from 'react'

import {Button,Form} from 'reactstrap'
import Navbar1 from '../../components/Navbar1'
import { useState } from 'react'
import axios from 'axios'
import user_base_url from '../../services/Helper'
import{ toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import {
   
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import './register.css'

const Register = () => {
    const [user,setUser]= useState({});
    const handleForm=(e)=>   {
        e.preventDefault();
        console.log(user);
        saveRegister(user)
       
    }
    const saveRegister=(data)=> {
        const user_base_url=`${process.env.REACT_APP_URL_USER}`;
        axios.post(`${user_base_url}/auth/signin/user`,data).then(
            (response)=>{
                console.log(response);
               toast.success("Registered");
            },
            (error)=>{
                console.log(error);
                toast.error(" Not Registered")
            } 
        )
    }
  return (
    <div>
        <Navbar1></Navbar1>
        

<ToastContainer></ToastContainer>
<MDBContainer fluid className='d-flex align-items-center cz bg-image ' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp)'}} >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 align-items-center' style={{maxWidth: '600px'}} >
        <MDBCardBody className='px-5' style={{position: 'realtive'}} >
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <Form onSubmit={handleForm}>
          <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text'  onChange={(e)=>{
                            setUser({...user,userName:e.target.value})}}/>
          <MDBInput wrapperClass='mb-4' label='Email-Id' size='lg' id='form2' type='email' onChange={(e)=>{
                            setUser({...user,email:e.target.value}) } }/>
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form3' type='number'  onChange={(e)=>{
                            setUser({...user,phoneNumber:e.target.value}) } }/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' onChange={(e)=>{
                            setUser({...user,password:e.target.value}) }}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <Button className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">
         Register</Button>
          </Form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default Register
