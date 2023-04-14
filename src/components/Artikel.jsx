import React, { useState } from "react";
import {Card, Row, Col, Container, Button } from 'react-bootstrap'
import Pagination from "./Pagination";
import logo from "../assets/logo-kabupaten.png";
import '../style/artikel.css'

const UMKM=()=>{
    const [umkms] = useState([
        {title: 'Hakiki Collection', body:'lorem',category:'Sepatu', id:1},
        {title: 'Kayu Haji ..', body:'lorem',category:'Kayu', id:2},
        {title: 'Konveksi Deni Dhafir', body:'lorem',category:'Tas', id:3},
        {title: 'Hakiki Collection 2', body:'lorem',category:'Sepatu', id:4},
        {title: 'Kayu Haji 2', body:'lorem',category:'Kayu', id:5},
        {title: 'Konveksi Deni Dhafir 2', body:'lorem',category:'Tas', id:6},
    ]);
    const [currentPage, setCurrentPage] =useState(1)
    const [artikelPerPage] = useState(3)

    const lastartikels = currentPage * artikelPerPage
    const firstartikels = lastartikels - artikelPerPage
    const currentartikels = umkms.slice(firstartikels, lastartikels)

    return(
        <>
        <Container className="artikel-container">
        <h2 className='text-center p-4'>Artikel</h2>
            <Row className='justify-content-center'>
                {currentartikels.map((item, i) =>(
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
            <div className="pagination-button text-center">
                <Pagination eventLength={umkms.length} eventPerPage={artikelPerPage} setCurrentPage={setCurrentPage}/>
            </div>
            <div className='justify-content-center d-flex p-4'>
                <Button variant='primary' className='text-center artikel-more-btn pe-4 ps-4'> Muat Lebih Banyak Artikel</Button>
            </div>
        </Container>
        </>
    );
}
export default UMKM