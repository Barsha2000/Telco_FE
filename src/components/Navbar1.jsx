import React,{useState} from 'react'
import { FaHome} from 'react-icons/fa';
import  {CgProfile} from 'react-icons/cg'
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './navbar1.css'
import { Link } from 'react-router-dom';
import myrio from '../pages/images/myrio.png'
   import Container from 'react-bootstrap/Container';
   import Nav from 'react-bootstrap/Nav';
   import Navbar from 'react-bootstrap/Navbar';
   

   const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiMenu-paper': {
        borderRadius: '100px',
        
        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75);',
        position: 'fixed'
      }
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  }));


const Navbar1 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes=useStyles()
  const userId= localStorage.getItem("userId")
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(userId)
  return (
    
    <div className='design'>
      <Navbar className='colors'  fixed='top'>
        <Container>
          <Navbar.Brand className="log" href="/"><img src={myrio} width="300" height="80" / ></Navbar.Brand>
          <Nav className="me-auto">
          <Link  className="logos " to="/"><FaHome size={40}  ></FaHome></Link>
             {userId ?(
                <Link className='navlink' style={{color:'black',fontSize:'25px'}} onClick={()=> {
                  localStorage.clear()
                  window.location.reload()
                }
                
                }
         
                >LogOut</Link>
              ):(
                <>
                
                <Link className='navlink-1' to="/login">Login</Link>
                <Link className='navlink-2' to="/register">Register</Link>
                </>
              )}

                <Link className='navlink-2' to="/plan">Plans</Link>
                
      <IconButton aria-label="delete" onClick={handleClick} >
      <AccountCircleIcon style={{fontSize:"48px"}}/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock={true}
        className={classes.root}
        PaperProps={{
          style: {
            borderRadius: '10px',
            marginTop: '35px',
           
            marginLeft: '10px',
            position: 'fixed',
          },
        }}
      >
        <MenuItem
         
        ><Link to="/userProfile" style={{color:"#000000"}}>View profile</Link>
        </MenuItem>
        <MenuItem> 
        <Link to="/active" style={{color:"#000000"}}>Active Plan</Link>
        </MenuItem>
        <MenuItem> 
        Past Plan
        </MenuItem>
      </Menu>
      
          </Nav>
        </Container>
      </Navbar>
      </div>
      
    
    
  

  )
}

export default Navbar1