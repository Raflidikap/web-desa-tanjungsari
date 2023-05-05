import { useState, React, useEffect } from "react";
import img from "../assets/pemandangan.jpg";
import { Container } from "react-bootstrap"
import Pagination from "./Pagination";
import '../style/UmkmCard.css'
import { getUmkmList } from "../api";


const UmkmCard = () =>{
    const [umkm, setumkm] = useState([])

    const [umkms] = useState([
        {title: 'Hakiki Collection', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:1},
        {title: 'Kayu Haji ..', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:2},
        {title: 'Konveksi Deni Dhafir', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.', author:'Admin', date:'20 April 2023', id:3},
    ]);
    const [isShow, setIsShow] = useState(false)
    const [currentPage, setCurrentPage] =useState(1)
    const [umkmPerPage ] = useState(3)

    const lastumkms = currentPage * umkmPerPage
    const firstumkms = lastumkms - umkmPerPage
    const currentUmkms = umkms.slice(firstumkms, lastumkms)

    

    useEffect(()=>{
        if(umkms.length > umkmPerPage) setIsShow(true)
        
        getUmkmList().then((result) =>{
            setumkm(result)
        })
        console.log(umkm)
    }, [isShow])

    

    return(
        <>
            <div className="umkm-section">
                <Container className="pt-5 pb-5">
                    <h3 className="title-section">UMKM</h3>
                    {currentUmkms.map((umkm, i)=>(
                        <div key={i} className="umkmCard-wrapper">
                            <div className="umkmImage-wrapper">
                                <img src={img} alt="" />
                            </div>
                            <div className="umkmDeskripsi-wrapper">
                                <h3>{umkm.title}</h3>
                                <p>{umkm.body}</p>
                            </div>
                        </div>
                    ))}
                    {isShow ?
                    <div className="pagination-button text-center">
                        <Pagination eventLength={umkms.length} eventPerPage={umkmPerPage} setCurrentPage={setCurrentPage}/>
                    </div>
                    : ""
                }
                
                </Container>
            </div>
        </>
    )
}

export default UmkmCard