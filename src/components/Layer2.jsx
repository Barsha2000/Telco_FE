import React from 'react'
import './layer2.css'
import Card from 'react-bootstrap/Card'
import r1 from '../pages/images/1.png'
import r2 from '../pages/images/2.png'
import r3 from '../pages/images/3.png'
import r4 from '../pages/images/4.png'

const Layer2 = () => {
  return (
    <div >
      <div className='he1'>
        <h1 className='he2 text-center'>RECOMMENDED FOR YOU</h1>
      </div>
      <div className='sc'>
<Card className='cd2 text-center'
    style={{
       width: '12rem' ,  
       display: 'flex'}}>
      <Card.Img className = "pos" variant="top" src={r1} />
      <Card.Body>
        <Card.Title>
            FIBER
        </Card.Title>
        <Card.Text>
        Enjoy unlimited wi-fi at ₹999
Up to 200 Mbps speed, unlimited calls & OTT apps
        </Card.Text>
      </Card.Body>
      
    </Card>

    <Card className='cd2 text-center'
    style={{
       width: '12rem' ,
      
       display: 'flex'}}>
      <Card.Img className = "pos" variant="top" src={r2} />
      <Card.Body>
        <Card.Title> POSTPAID</Card.Title>
        <Card.Text>
        Get a superior network at just ₹499
75 GB data with no daily limit & top OTT apps
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className='cd2 text-center'
    style={{
       width: '12rem' ,
      
       display: 'flex'}}>
      <Card.Img className = "pos" variant="top" src={r3} />
      <Card.Body>
        <Card.Title>PREPAID</Card.Title>
        <Card.Text>
        Enjoy high-speed, seamless network
        Home delivery of SIM & Quick activation
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className='cd2 text-center'
    style={{
       width: '12rem' ,
      
       display: 'flex'}}>
      <Card.Img className = "pos" variant="top" src={r4} />
      <Card.Body>
        <Card.Title>DTH CONNECTION</Card.Title>
        <Card.Text>
        Access 550+ HD And SD Channels With Budget Plans.
        </Card.Text>
      </Card.Body>
      
    </Card>
    </div>
    </div>
  )
}

export default Layer2