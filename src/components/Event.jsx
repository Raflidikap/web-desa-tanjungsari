import {Card, Row, Container, Col, Button}from 'react-bootstrap';
import Pagination from './Pagination';
import React from 'react'
import { useState, useEffect} from 'react';
// import logo from '../assets/logo-kabupaten.png'
import '../style/event.css'
import axios from 'axios';

const Event=()=>{
    const [event, setEvent] = useState([])
    const [events] = useState([
        {title: 'lorem Ipsum 1', body:'lorem',category:'Admin, 12 April 2023', id:1},
        {title: 'lorem Ipsum 2', body:'lorem',category:'Admin, 12 April 2023', id:2},
        {title: 'lorem Ipsum 3', body:'lorem',category:'Admin, 12 April 2023', id:3},
        {title: 'lorem Ipsum 4', body:'lorem',category:'Admin, 12 April 2023', id:4},
        {title: 'lorem Ipsum 5', body:'lorem',category:'Admin, 12 April 2023', id:5},
        {title: 'lorem Ipsum 6', body:'lorem',category:'Admin, 12 April 2023', id:6},
    ]);
    const [currentPage, setCurrentPage] =useState(1)
    const [eventPerPage] = useState(3)


    const lastevents = currentPage * eventPerPage
    const firstevents = lastevents - eventPerPage
    const currentevents = event.slice(firstevents, lastevents)

    useEffect(()=>{
        axios.post('https://joyous-pink-catfish.cyclic.app/posts/search?page=1&limit=1', {
        category: 'event',
        })
        .then( (response) =>{
          setEvent(response.data.docs);
        })
        .catch( (error) =>{
            console.log(error);
        });
      }, [])
      console.log(event)

    const EventsCard = () => {
        return currentevents.map((event, i)=>{
            return(
                <Col key={i} md="4" className=''>
                <Card className='event-card mt-3 mb-3'>
                <Card.Img variant="top" src={event.image} className="event-image mx-auto img-thumbnail"/>
                <Card.Body className='p-4'>
                    <Card.Text>
                        {event.category}
                    </Card.Text>
                    <Card.Title>{event.name}</Card.Title>
                </Card.Body>
                <Button>Click Me!</Button>
            </Card>
                </Col>
            
            );   
        })
    }
    return(
        <div className="event-wrapper">
        <Container className=''>
            <h2 className='text-center p-4 event-title'>Event</h2>
            <Row className='justify-content-center'>
                <EventsCard/>
            </Row>
            <div className="pagination-button text-center">
                <Pagination eventLength={events.length} eventPerPage={eventPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </Container>
        </div>
        
           
    );
    
}

export default Event;