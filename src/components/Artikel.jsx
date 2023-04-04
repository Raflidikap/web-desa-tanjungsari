import React, { useState } from "react";
import {Card, Row, Col, Container, Button } from 'react-bootstrap'
import logo from "../assets/logo-kabupaten.png";
import '../style/umkm.css'

const UMKM=()=>{
    const [umkms] = useState([
        {title: 'Hakiki Collection', body:'lorem',category:'Sepatu', id:1},
        {title: 'Kayu Haji ..', body:'lorem',category:'Kayu', id:2},
        {title: 'Konveksi Deni Dhafir', body:'lorem',category:'Tas', id:3}
    ]);

    return(
        <>
        <Container className="artikel-container">
        <h2 className='text-center p-4'>Artikel</h2>
            <Row className='justify-content-center'>
                {umkms.map((item, i) =>(
                    <Col key={i} xl="12"  className='pb-4 g-5'>
                        <Card className="p-4 d-flex artikelCard-wrapper">
                            <Card.Img variant="top" src={logo} className="artikel-image"/>
                            <Card.Body className="">
                                <Card.Title className="card-title">{item.title}</Card.Title>
                                <Card.Text>{item.category}</Card.Text>
                                <Card.Text>{item.body}</Card.Text>
                            </Card.Body>
                        </Card>              
                    </Col>
                ))}          
            </Row>
            <div className='justify-content-center d-flex p-4'>
                <Button variant='primary' className='text-center artikel-more-btn pe-4 ps-4'> Muat Lebih Banyak Artikel</Button>
            </div>
        </Container>
        </>
    );
}
export default UMKM