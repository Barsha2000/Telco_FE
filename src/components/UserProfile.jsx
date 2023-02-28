import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './userProfile.css'
import {Button} from 'reactstrap'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBInput
    
  } from 'mdb-react-ui-kit';

const UserProfile = () => {
  const [user,setUser]= useState({});
    const [userDetails,setUserDetails]=useState({})
    useEffect(() => {
    const userId=localStorage.getItem("userId")
    console.log(userId)
      fetchUserDetails(userId)
      
    }, [])
    const updateProfile =()=>{
      let body={
        userId:userDetails.userId,
        userName:userDetails.userName ,
        email:userDetails.email,
          phoneNumber:userDetails.phoneNumber,
      }
      console.log(body)
    
      axios.post(`${process.env.REACT_APP_URL_USER}/Profile/${localStorage.getItem("userId")}`, body, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }})
        .then((response) => {
          console.log(response);
          

        }).catch(err=>console.log(err))
        

    }

    const fetchUserDetails=(userId)=>{
               
                axios.get(`${process.env.REACT_APP_URL_USER}/Profile/${userId}`, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }
})
                .then(res=>{
                    console.log(res);
                    setUserDetails(res.data)
                })
                .catch(err=>console.log(err))
            }
    
  return (

    <div >
    
    
                  <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 top">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4 top">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>User Id</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"> {Object.keys(userDetails) && userDetails.userId}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput wrapperClass='mb-4'  size='lg' id='form1' type='text'  onChange={(e)=>{
                            setUserDetails({...userDetails,userName:e.target.value})}} value={Object.keys(userDetails) && userDetails.userName}></MDBInput>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email-Id</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput wrapperClass='mb-4'  size='lg' id='form2' type='email' onChange={(e)=>{
                            setUserDetails({...userDetails,email:e.target.value}) } } value={Object.keys(userDetails) && userDetails.email}></MDBInput>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput wrapperClass='mb-4'  size='lg' id='form3' type='number'  onChange={(e)=>{
                            setUserDetails({...userDetails,phoneNumber:e.target.value}) } } value={Object.keys(userDetails) && userDetails.phoneNumber}></MDBInput>
                  </MDBCol>
                </MDBRow>
                <hr />
                <Button onClick={()=> {
                  updateProfile()
                }}>Update Profile</Button>
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  )
}

export default UserProfile




