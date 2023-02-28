import React from 'react'
import { Col,Row } from 'reactstrap'
import  {MdOutlinePayment } from 'react-icons/md'
import  {GoDeviceMobile} from 'react-icons/go'
import {FaPhoneAlt} from 'react-icons/fa'
import {ImEarth} from 'react-icons/im'
import './layout.css'

const Layout = () => {
  return (
    <div><div style={{ display: 'block', width: 1200, padding: 50 }}>
    <h4 className='sp3 text-center m2'>BOOK RIO CONNECTIONS</h4>
    <Row>
      <Col style={{
        backgroundColor: 'white',
      }}>
        <span className='sp1'>
        <MdOutlinePayment size={30} />Pay My Bills</span>
        <Row>
        <span className='sp2'>
        <ul>
           <li> Bharat Fibre(FTTH) </li>
           <li> Landline/Broadband </li>
           <li> MOBILE </li>
        </ul>
        </span>
                           
        </Row>
    </Col>

    
      <Col style={{
        backgroundColor: 'white',
      }}>
        <span className='sp1'>
         <GoDeviceMobile size={30} />Recharge</span>
         <Row>
         <span className='sp2'>
        <ul>
           <li> Mobile /Top up/Special tariff Voucher/Plan Migration.</li>
           <li> Prepaid Broad band/Recharge </li>
        </ul>
        </span>
         </Row>
    </Col>
      <Col style={{
        backgroundColor: 'white',
      }}>
        <span className='sp1'>
        <FaPhoneAlt size={30} />Customer Care</span>
        <Row>
          <span className='sp2'>
        <ul>
           <li> CareCustomer Care – One click.</li>
           <li> Prepaid Mobile Selfcare </li>
           <li>Postpaid Mobile Selfcare</li>
        </ul>
        </span>
         </Row>
    </Col>
    <Col style={{
        backgroundColor: 'white',
      }}>
        <span className='sp1'>
        <ImEarth size={30} /> New Connection</span>
        <Row>
        <span className='sp2'>
        <ul>
           <li>Customer Self Onboarding</li>
           <li>WINGS service</li>
           <li>Apply for Bharat Fibre(FTTH)</li>
        </ul>
        </span>
         </Row>
    </Col>
    
    </Row>
  </div></div>
  )
}

export default Layout