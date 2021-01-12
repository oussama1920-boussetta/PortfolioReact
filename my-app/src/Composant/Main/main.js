import React from 'react'
import { Card, ListGroupItem, ListGroup,ProgressBar } from 'react-bootstrap'
import './main.css'
import ImgCard from '../Images/oussama.jpg'


const Main = () => {
    return (

        <div className="main">
            <div className='cardoo'>

        <Card className='cardo' style={{ width: '18rem' }} >

            <Card.Img className='ImgCard' variant="top" src={ImgCard} />
            <Card.Body>
                <Card.Title>MOHAMED OUSSAMA BOUSSETTA</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Date de Naissance : 18/06/1990</ListGroupItem>
                <ListGroupItem>Tel : 24835567</ListGroupItem>
                <ListGroupItem>Email: boussettamohamedoussama@gmail.com</ListGroupItem>
            </ListGroup>

        </Card>
        </div>
        <div className='BarProgress'>
<div className='BarProgresse'>
<h3>Developpement WEB</h3>

<ProgressBar variant="info" label={'57%'} now={57} />
</div>
<div className='BarProgresse'>
<h3>Marketing</h3>

<ProgressBar variant="info" label={'99%'} now={99} />
</div>
<div className='BarProgresse'>
    <h3>Commerce international</h3>
<ProgressBar variant="info" label={'100%'} now={100} />
</div>
</div>
        </div>




    )
}



export default Main;

