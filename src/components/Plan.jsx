import React from 'react'
import {Card,CardText,CardBody,CardHeader,CardFooter} from 'reactstrap'
import { useState,useEffect } from 'react'
import Footer from './Footer/Footer'
import { Link } from 'react-router-dom'
import card1 from '../pages/images/p1.png'
import card2 from '../pages/images/sim-card.png'
import { Col,Row } from 'reactstrap'
import axios from 'axios'

 import './plan.css'
const Plan = () => {
     const[data,setData] = useState("");
    useEffect(()=>{
        document.title="Plans | My Rio";
        getAllPlans();
    }, []);
    const getAllPlans=()=> {
        const base_url=`${process.env.REACT_APP_URL_PLAN}`;
        axios.get(`${base_url}/viewPlan`).then(
            (response)=>{
                console.log(response.data);
                
                setData(response.data);
            },
            (error)=>{
                console.log(error);
                // toast.error("No Appointments Available")
            } 
        )
    }

  return (
    
    <div >
       <div >
        <h1 className='rq'>CHOOSE FROM OUR BEST PLANS</h1>
       </div>
       <div class="row">
  <div className='ssb'>
  <Row >
      <Col className='ssb1'>
    <h2 className='s1'><span className='s11'>Activate your SIM at zero</span> additional cost</h2>
    <img className='c1img' src={card1}></img>
    </Col>
  
  
      <Col className='ssb2'>
    <h2 className='s2'><span className='s12'>Free doorstep delivery</span> of your SIM</h2>
    <img className='c2img' src={card2}></img>
    </Col>
    </Row>
  </div>
</div>
       <div className='cd'>
        {data.length > 0 &&
            data.map((item) => {
              return (
                <div >
                     <Card
  className="my-2 cd1 text-center "
  style={{
    width: '18rem',
    display: 'flex'
  }}
> <CardHeader className='head'>
{item.planName}
  </CardHeader>
                    <CardBody>
                  
                   
                   <CardText className='prs'>₹{item.price} </CardText>
                   <CardText className='vs'>Validity: {item.planDuration} days</CardText>
                   <CardText className='vs1'> {item.description} </CardText>
                   

                   </CardBody> 
                  
                  
                 
                  <CardFooter className='hv'><Link  to={`/planDetails/${item.planId}`} style={{color:"black"}}>TRY NOW</Link>  </CardFooter>
                  </Card>
                </div>
              );
            })}
            </div>

            <div>
            
            </div>
            <Footer></Footer>
            
    </div>
  )
}

export default Plan