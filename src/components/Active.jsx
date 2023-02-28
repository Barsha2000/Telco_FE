import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          INVOICE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
         Plan Name: {props.invoiceDetail.planName}
         </p>
         <p>
         Plan Duration: {props.invoiceDetail.planduration}
         </p>
         <p>
         Benefits: {props.invoiceDetail.benefits}
         </p>
         <p>
         Price: {props.invoiceDetail.price}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Active = () => {
    const [data,setData]=useState([])
    const [modalShow, setModalShow] = useState(false);
    const [invoiceDetail,setInvoiceDetail]= useState({})
    useEffect(() => {
        getActivePlan()
      
    
      
    }, [])

    const getDate = (date) =>{
      let newDate=new Date(date)
      let day=newDate.getDate()
      let month=newDate.getMonth()
      let year= newDate.getFullYear()
      return day+"/"+month+"/"+year

    }
    const getInvoice=(planId)=>{
        const base_url=`${process.env.REACT_APP_URL_PLAN}`;
        axios.get(`${base_url}/planDetails/${planId}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }}).then(
            (response)=>{
                console.log(response.data);
                setInvoiceDetail(response.data)
                setModalShow(true)
                
              
            },
            (error)=>{
                console.log(error);
                
            } 
        )
              
    }
    const getActivePlan=()=> {

        const base_url=`${process.env.REACT_APP_URL_USER}`;
        axios.get(`${base_url}/ActivePlan/${localStorage.getItem("userId")}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }}).then(
            (response)=>{
                console.log(response.data);
                if(Array.isArray(response.data)){
                    setData(response.data)
                }else{
                       setData([response.data])
                }
              
            },
            (error)=>{
                console.log(error);
               
            } 
        )
    }
    
  return (
    <div>
       <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        invoiceDetail={invoiceDetail}
      />
      <form class="d-flex" className='searchi'>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
      </form> 
    
    <Table striped bordered hover style={{marginTop:"3rem",fontWeight:"bold"}}>
      <thead>
        <tr>
          
          <th>User ID</th>
          <th>PLan ID</th>
          <th>Recharge Date</th>
          <th>Expiry Date</th>
        </tr>
      </thead>
      <tbody>
      {data.length>0 && data.map((product) => (
<tr>
  <td>{product.userId}</td>
  <td>{product.planId}</td>
  <td>{getDate(product.createdDate)}</td>
  <td>{getDate(product.expiryDate)}</td>
  <td><Button onClick={()=>{
    getInvoice(product.planId) 
  }} variant="danger">View Invoice</Button></td>
</tr>
))}
      
      </tbody>
    </Table>
    
    </div>
  )
}

export default Active