import React, { useState } from "react";
import {Row, Col, Container} from 'react-bootstrap'
import Pagination from "./Pagination";
import logo from "../assets/pemandangan.jpg";
import '../style/postingan.css'

const Postingan=()=>{
    const [posts] = useState([
        {title: 'Hakiki Collection', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:1},
        {title: 'Kayu Haji ..', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:2},
        {title: 'Konveksi Deni Dhafir', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:3},
        {title: 'Hakiki Collection 2', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:4},
        {title: 'Kayu Haji 2', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:5},
        {title: 'Konveksi Deni Dhafir 2', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:6},
    ]);
    const [currentPage, setCurrentPage] =useState(1)
    const [postPerPage ] = useState(5)

    const lastposts = currentPage * postPerPage
    const firstposts = lastposts - postPerPage
    const currentposts = posts.slice(firstposts, lastposts)

    
    return(
        <>
            <Container className="postingan-container">
                <h1 className="text-center mb-5 mt-5 postingan-title-section">POSTINGAN</h1>
                <Row className="justify-content-center">
                    {currentposts.map((p, index) =>(
                        <>
                            <Col xl="6" key={index} className="image-postingan-wrapper">
                                <img className="postingan-image" src={logo} alt="" />
                            </Col>
                            <Col xl="6">
                                <h3 className="postingan-title">{p.title}</h3>
                                <p className="postingan-text">{p.body}</p>
                                <div className="utils-postingan">
                                    <p className="created-time">{p.date}</p>
                                    <p className="created-by">{p.author}</p>
                                </div>
                            </Col>
                        </>                        
                    ))}
                </Row>
                <div className="pagination-button text-center">
                    <Pagination eventLength={posts.length} eventPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
                </div>
            </Container>
        </>
    );
}
export default Postingan