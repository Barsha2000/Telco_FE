import React from 'react'
import Layer1 from '../../components/Layer1'
import Layer2 from '../../components/Layer2'
import Layout from '../../components/Layout/Layout'
import Navbar1 from '../../components/Navbar1'
import Slider from '../../components/Slider'
import Register from '../Register/Register'
import Footer from '../../components/Footer/Footer'
import './home.css'

const Home = () => {
  
  return (
    <div className='ho' >
        
        <Navbar1></Navbar1>
        <Slider/>
        <Layout/>
        <Layer1 />
        <Layer2 />
        <Footer />
       
    </div>
  )
}

export default Home