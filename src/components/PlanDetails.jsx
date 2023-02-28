import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './planDetails.css'
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'
import c1 from '../pages/images/5g.png'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage, 
  MDBRipple
} from "mdb-react-ui-kit";
const PlanDetails = () => {
     const params = useParams();
    const[planId,setPlanId] = useState("");
    const[planName,setPlanName] = useState("");
    const[price,setPrice] = useState("");
    const[planDuration,setPlanDuration] = useState("");
    const[benefits,setbenefits] = useState("");
    useEffect(()=>{
        document.title="Plans";
        getPlanById();
    }, []);
      const getPlanById=()=> {
        const base_url=`${process.env.REACT_APP_URL_PLAN}`;
        axios.get(`${base_url}/planDetails/${params.planid}`).then(
            (response)=>{
                console.log(response.data);
                // console.log(response.data.planId);
                setPlanId(response.data.planId);
                setPlanName(response.data.planName);
                setPrice(response.data.price);
                setPlanDuration(response.data.planDuration);
                setbenefits(response.data.benefits);
                console.log({planId})
                localStorage.setItem("planId",response.data.planId);
                localStorage.setItem("planName",response.data.planName);
                localStorage.setItem("price",response.data.price);
                localStorage.setItem("planDuration",response.data.planDuration);
                localStorage.setItem("benefits",response.data.benefits);
                
            },
            (error)=>{
                console.log(error);
                
            } 
        )
    }


  return (
    <div className='cd'>
                  <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
        <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={c1}
                      style={{height:"10rem", width:"5rem"}}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                       
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{planName}</h5>
                  
                  <div className="mt-1 mb-0 text-muted small">
                    <span>Validity: {planDuration} Days</span>
                   
                  </div>
                 
                 
                </MDBCol>
               
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start">
                     <span>Benefits: {benefits}</span>
                  <div className="d-flex flex-row align-items-center mb-1">
                    
                    <h4 className="mb-1 me-1">₹{price}</h4>
                    
                  </div>
                  
                  <div className="d-flex flex-column mt-4">
                  
                    <Button outline  size="sm" className="mt-2" variant='danger'>
                      <Link  to={`/bill/${planId}`} style={{color:"black",fontWeight:"bold",fontSize:"15px"}}>
                        Recharge
                  </Link>
                    </Button>
                  </div>
                </MDBCol>
              </MDBRow>
       
     
      
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
                </div>
              );
              
            }

export default PlanDetails