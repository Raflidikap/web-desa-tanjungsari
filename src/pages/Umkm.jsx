// import React, { useState } from "react";
// import {Card, Row, Col, Container } from 'react-bootstrap'
// import logo from "../assets/logo-kabupaten.png";
import '../style/umkm.css'
import React from 'react';
import DetailUMKM from "./UmkmDetail";

const UMKM=()=>{
    // const [umkms] = useState([
    //     {title: 'Hakiki Collection', body:'lorem',category:'Sepatu', id:1},
    //     {title: 'Kayu Haji ..', body:'lorem',category:'Kayu', id:2},
    //     {title: 'Konveksi Deni Dhafir', body:'lorem',category:'Tas', id:3}
    // ]);

    return(
        <>
        {/* <Container className="umkm-container mb-5">
            <Row className='justify-content-center mt-5'>
                {umkms.map((item, i) =>(
                    <Col key={i} xl="12"  className='pb-4 g-5'>
                        <Card className="p-4 d-flex umkmCard-wrapper">
                            <Card.Img variant="top" src={logo} className="umkm-image"/>
                            <Card.Body className="umkmCard-body">
                                <Card.Title className="card-title">{item.title}</Card.Title>
                                <Card.Text>{item.category}</Card.Text>
                                <Card.Text>{item.body}</Card.Text>
                            </Card.Body>
                        </Card>              
                    </Col>
                ))}          
            </Row> 
        </Container> */}
        <DetailUMKM/>
        </>
    );
}
export default UMKM