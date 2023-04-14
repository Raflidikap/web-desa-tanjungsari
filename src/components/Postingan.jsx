import React, { useState } from "react";
import {Row, Col, Container} from 'react-bootstrap'
// import Pagination from "./Pagination";
import logo from "../assets/pemandangan.jpg";
import '../style/postingan.css'

const Postingan=()=>{
    const [post] = useState([
        {title: 'Hakiki Collection', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:1},
        {title: 'Kayu Haji ..', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:2},
        {title: 'Konveksi Deni Dhafir', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:3},
        {title: 'Hakiki Collection 2', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:4},
        {title: 'Kayu Haji 2', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:5},
        {title: 'Konveksi Deni Dhafir 2', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:6},
    ]);
    // const [currentPage, setCurrentPage] =useState(1)
    // const [artikelPerPage] = useState(3)

    // const lastartikels = currentPage * artikelPerPage
    // const firstartikels = lastartikels - artikelPerPage
    // const currentartikels = umkms.slice(firstartikels, lastartikels)

    
    return(
        <>
            <Container className="postingan-container">
                <h1 className="text-center mb-5 mt-5 postingan-title-section">POSTINGAN</h1>
                <Row className="justify-content-center">
                    {post.map((p, index) =>(
                        <>
                            <Col xl="6" key={index} className="image-postingan-wrapper">
                                <img className="postingan-image" src={logo} alt="" />
                            </Col>
                            <Col xl="6">
                                <h3 className="postingan-title">{p.title}</h3>
                                <p className="postingan-text">{p.body}</p>
                                <Row className="justify-content-between utils-postingan">
                                    <Col className="created-time" md="6">{p.date}</Col>
                                    <Col className="created-by" md="6">{p.author}</Col>
                                </Row>
                            </Col>
                        </>                        
                    ))}
                    
                </Row>
            </Container>
        </>
    );
}
export default Postingan