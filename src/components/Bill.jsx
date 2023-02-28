import React from 'react'
import {Card,CardHeader,Button,Form,CardBody,FormGroup,Container,Label,Input} from 'reactstrap'
import axios from 'axios'
import {Col, NavLink, Row }from 'reactstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './bill.css'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
const Bill = () => {
  const[paymentDetailsFilled,setPaymentDetailsFilled] = useState(false);
  const handlePayment = () =>{
    if(paymentDetailsFilled){
      navigate("/notification")
    }else{
      alert("Please fill all the details")
    }
  }


  const navigate = useNavigate();
  
 useEffect(() => {
  const planId=localStorage.getItem("planId");
  const planName=localStorage.getItem("planName");
  const price=localStorage.getItem("price");
  const planDuration= localStorage.getItem("planDuration");
  const benefits=localStorage.getItem("benefits");
  setBill({...bill,planId:planId,planName:planName,price:price,planDuration:planDuration,benefits:benefits})
   
  
 }, [])


 
  axios.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );
    const [bill,setBill]= useState({});
    
    const handleForm=(e)=>   {
      e.preventDefault();
        console.log(bill);
        saveBill(bill)
        
    } 


    const saveBill=(data)=> {
        const base_url=`${process.env.REACT_APP_URL_PLAN}`;
        axios.post(`${base_url}/bill`,data).then(
            (response)=>{
                console.log(response);   
            }).catch((error)=>console.log(error))
        let body={
          planId:Number(localStorage.getItem("planId")) ,
            userId:Number(localStorage.getItem("userId")),
            createdDate:new Date().toJSON(),
            expiryDate: new Date(new Date().setDate(new Date().getDate() + 30)).toJSON()
        }
        console.log(body)
      
        axios.post(`${process.env.REACT_APP_URL_USER}/ActivePlan`, body)
          .then((response) => {
            console.log(response);
            
          });
         
    }
    
   

  return (
    <div className='dc1'>
<MDBContainer
      className="py-5"
      fluid
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h2>Payment</h2>
              </div>
              <Form onSubmit={handleForm}>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                />
                </div>
                
                
                
                <MDBInput
                      id="id"
                      name="planId"
                      label="Plan Id"
                      type="number"
                      size="lg" 
                      defaultValue={localStorage.getItem('planId')} 
                     onChange={(e)=>{
                      setBill({...bill,planId:localStorage.getItem('planId')})
                    }}
                    />
               <MDBInput
                      id="id2"
                      label="Plan Name"
                      name="planName"
                      type="text"
                      size="lg" 
                      defaultValue={localStorage.getItem('planName')} 
                     onChange={(e)=>{
                      setBill({...bill,planName:localStorage.getItem('planName')})
                    }}
                    />
                <MDBInput
                      id="id2"
                      label="Plan Duration"
                      name="planDuration"
                      type="text"
                      size="lg" 
                      defaultValue={localStorage.getItem('planDuration')}
                     onChange={(e)=>{
                      setBill({...bill,planDuration:localStorage.getItem('planDuration')})
                    }}
                    />
                    <MDBInput
                      id="id2"
                      label="Amount"
                      name="price"
                      type="number"
                      size="lg" 
                      defaultValue={localStorage.getItem('price')}
                     onChange={(e)=>{
                      setBill({...bill,planName:localStorage.getItem('price')})
                    }}
                    /> 
               
                  
              
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                onChange={(e)=>{
          setBill({...bill,cardHolderName:e.target.value !== ""})
        }
    }
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    onChange={(e) => setPaymentDetailsFilled(e.target.value !== "")}
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="date"
                    
                    
                    onChange={(e)=>{
        setBill({...bill,expiryDate:e.target.value !== ""})
    }
  }
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                    onChange={(e)=>{
     setBill({...bill,cvv:e.target.value!== ""})
    }
 }
                  />
                </MDBCol>
              </MDBRow>
              <Button  color="success" type='submit' onClick={handlePayment} > Pay</Button> 
              </Form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer> 
    </div>
  )
}

export default Bill