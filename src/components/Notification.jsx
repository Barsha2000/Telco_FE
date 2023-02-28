import React from 'react'
import { Card,CardHeader,CardBody,CardTitle,Button } from 'reactstrap'
import { CardText } from 'reactstrap'
import './notification.css'

const Notification = () => {
  return (
    <div>
        <Card style={{height:"15rem", width:"50rem"}} className=" text-center se1">
  <CardHeader>Notification</CardHeader>
  <CardBody>
    <CardTitle>Thanks....Payment has been succesfully done.</CardTitle>
    <CardText>Plan benefits will be applied to your mobile number shortly...</CardText>
    <Button href="/" color="danger">ok</Button>
  </CardBody>
</Card>
    </div>
  )
}

export default Notification