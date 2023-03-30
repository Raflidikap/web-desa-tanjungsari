import {Card, Col, Row, Container}from 'react-bootstrap';
import "../style/event.css"
import React from 'react'
import { useState} from 'react';
import logo from '../assets/logo-kabupaten.png'
const Event=()=>{
    const [events] = useState([
        {title: '1', body:'lorem',category:'test', id:1},
        {title: '2', body:'lorem',category:'test', id:2},
        {title: '3', body:'lorem',category:'test', id:3}
    ]);
    const EventsCard = () => {
        return events.map((event, i)=>{
            return(
            <Col key={i} md="4" className='pb-4'>
            <Card className="event-card me-4">
                <Card.Img variant="top" src={logo} className="event-image mx-auto"/>
                <Card.Body className='p-4'>
                    <Card.Text>
                        {event.category}
                    </Card.Text>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptatum assumenda mollitia temporibus nam blanditiis illo. Ut, pariatur odit? Nemo accusamus iure, aliquid magni ipsum eum culpa quas placeat quam?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            );   
        })
    }
    return(
        <div className="event-wrapper">
        <Container>
            <h2 className='text-center p-4'>Event</h2>
            <Row className='justify-content-center'>
                <EventsCard/>
            </Row> 
        </Container>
        </div>
        
           
    );
    
}

export default Event;