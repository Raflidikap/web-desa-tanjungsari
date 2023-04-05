import {Card, Row, Container, Button, Col}from 'react-bootstrap';
import Pagination from './Pagination';
import React from 'react'
import { useState} from 'react';
import logo from '../assets/logo-kabupaten.png'

const Event=()=>{
    const [events] = useState([
        {title: '1', body:'lorem',category:'test', id:1},
        {title: '2', body:'lorem',category:'test', id:2},
        {title: '3', body:'lorem',category:'test', id:3},
        {title: '4', body:'lorem',category:'test', id:4},
        {title: '5', body:'lorem',category:'test', id:5},
        {title: '6', body:'lorem',category:'test', id:6},
    ]);
    const [currentPage, setCurrentPage] =useState(1)
    const [eventPerPage] = useState(3)

    const lastevents = currentPage * eventPerPage
    const firstevents = lastevents - eventPerPage
    const currentevents = events.slice(firstevents, lastevents)

    const EventsCard = () => {
        return currentevents.map((event, i)=>{
            return(
                <Col key={i} md="4" className=''>
                <Card className='event-card m-3' me-4 >
                <Card.Img variant="top" src={logo} className="event-image mx-auto img-thumbnail"/>
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
        <Container className=''>
            <h2 className='text-center p-4'>Event</h2>
            <Row className='justify-content-center'>
                <EventsCard/>
            </Row>
            <div className="pagination-button text-center">
                <Pagination eventLength={events.length} eventPerPage={eventPerPage} setCurrentPage={setCurrentPage}/>
            </div>
            <div className='justify-content-center d-flex p-4'>
                <Button variant='primary' className='text-center event-more-btn pe-4 ps-4'> Muat Lebih Banyak Acara</Button>
            </div>
            
        </Container>
        </div>
        
           
    );
    
}

export default Event;