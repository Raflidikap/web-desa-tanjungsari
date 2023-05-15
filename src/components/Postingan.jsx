import React, { useState, useEffect } from "react";
import {Row, Col, Container} from 'react-bootstrap'
import Pagination from "./Pagination";
// import logo from "../assets/pemandangan.jpg";
import '../style/postingan.css'
// import { getPostList } from "../api";
import axios from "axios";
import * as icons from "react-bootstrap-icons";
import moment from 'moment'

const Postingan=()=>{
    const [post, setpost] = useState([])

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
    const currentposts = post.slice(firstposts, lastposts)

    // useEffect(()=>{
    //     getPostList().then((result) =>{
    //         setpost(result)
    //     })
    //     console.log(post)
    // }, [])

    useEffect(()=>{
        axios.post('https://joyous-pink-catfish.cyclic.app/posts/search?page=1&limit=1', {
        category: 'post',
        })
        .then( (response) =>{
          setpost(response.data.docs);
        })
        .catch( (error) =>{
            console.log(error);
        });
      }, [])

    return(
        <>
            <Container className="postingan-container">
                <h1 className="text-center mb-5 mt-5 postingan-title-section">POST</h1>
                <Row className="justify-content-center">
                    {currentposts.map((p, index) =>(
                        <div key={index} className="postingan-wrapper">
                            <Col xl="6"  className="image-postingan-wrapper">
                                <img className="postingan-image fluid" src={p.image} alt="" />
                            </Col>
                            <Col xl="6">
                                <h3 className="postingan-title">{p.name}</h3>
                                <p className="postingan-text" dangerouslySetInnerHTML={{ __html: p.description }}></p>
                                <div className="utils-postingan">
                                    <p className="created-time">{moment(p.createdAt).format("L")}</p>
                                    
                                    <p className="created-by"><icons.PeopleFill className="postIcons" />Admin</p>
                                </div>
                            </Col>
                        </div>                        
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