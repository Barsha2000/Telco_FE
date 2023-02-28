import React from 'react'
import {
  BrowserRouter,Routes,Route
 }from "react-router-dom"
import PlanDetails from './components/PlanDetails'
 import Home from "./pages/home/Home"
 import Login from "./pages/login/Login"
 import Plan from "./components/Plan"
 import Register from "./pages/Register/Register"
 import Bill from "./components/Bill"
import UserProfile from './components/UserProfile'
import Navbar1 from './components/Navbar1'
import Layout from './components/Layout/Layout'
import Layer1 from './components/Layer1'
import Layer2 from './components/Layer2'
import Footer from './components/Footer/Footer'
import Active from './components/Active'
import Notification from './components/Notification'


const App = () => {

  return (
    
    <BrowserRouter>
    {/* <div>
        <h1 className='rec'>RIO <h5 className='rio'>My Rio</h5></h1>

        </div> */}
        <div><Navbar1 /></div>
        
    <Routes>
    <Route index element={<Home />}/>
    <Route path='login' element={<Login />}/>
    <Route path='register' element={<Register />}/>
    <Route path='plan' element={<Plan />}/>

    <Route path='planDetails/:planid' element={<PlanDetails/>}></Route>
    <Route path='bill/:planid' element={<Bill/>}></Route>
    {/* <Route path='userprofile/:userId' element={<UserProfile />}></Route> */}
    <Route path="userProfile" element={<UserProfile/>} />
    <Route path="layout" element={<Layout/>}/>
    
    <Route path="layer1" element={<Layer1/>}/>
    <Route path="layer2" element={<Layer2/>}/>
    <Route path="footer" element={<Footer/>}/>
    <Route path="active" element={<Active/>}/>
    <Route path="notification" element={<Notification/>} />
    

    

    </Routes></BrowserRouter>
  )
}

export default App