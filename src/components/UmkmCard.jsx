import { useState, React, useEffect } from "react";
// import img from "../assets/pemandangan.jpg";
import { Container } from "react-bootstrap"
import Pagination from "./Pagination";
import '../style/UmkmCard.css'
import { getUmkmList } from "../api";


const UmkmCard = () =>{
    const [umkm, setumkm] = useState([])
    console.log(umkm)
    const [isShow, setIsShow] = useState(false)
    const [umkmPerPage] = useState(3)

    

    useEffect(()=>{
        if(umkm?.docs?.length() > umkmPerPage) setIsShow(true)
        
        getUmkmList().then((result) =>{
            setumkm(result)
        })
    }, [isShow])

    

    return(
        <>
            <div className="umkm-section">
                <Container className="pt-5 pb-5">
                    <h3 className="title-section">UMKM</h3>
                    {umkm?.docs?.map((umkm, i)=>(
                        <div key={i} className="umkmCard-wrapper">
                            <div className="umkmImage-wrapper">
                                <img src={umkm.image[0]} alt="" />
                            </div>
                            <div className="umkmDeskripsi-wrapper">
                                <h3>{umkm.name}</h3>
                                <p dangerouslySetInnerHTML={{__html:umkm.description}}></p>
                            </div>
                        </div>
                    ))}
                    {isShow ?
                    <div className="pagination-button text-center">
                        <Pagination eventLength={umkm?.docs?.length()} eventPerPage={umkmPerPage} setCurrentPage={umkm?.page}/>
                    </div>
                    : ""
                }
                
                </Container>
            </div>
        </>
    )
}

export default UmkmCard