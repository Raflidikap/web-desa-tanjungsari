import { useState, React, useEffect } from "react";
import { Container } from "react-bootstrap"
import Pagination from "./Pagination";
import '../style/UmkmCard.css'
import '../style/loadingOverlay.css'
import { getUmkmList } from "../api";


const UmkmCard = () =>{
    const [umkm, setumkm] = useState([])
    console.log(umkm)
    const [isShow, setIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const umkmPerPage = 1
    const [page, setPage] = useState(1)
    console.log(page)
    

    

    useEffect(()=>{
        setIsLoading(true)    
        getUmkmList(page, umkmPerPage).then((result) =>{
            setumkm(result)
            console.log(result.docs.length)
            if(result?.docs?.length === umkmPerPage) setIsShow(true)
            setIsLoading(false)
        })
    }, [isShow, page])

    

    return(
        <>
            <div className="umkm-section">
                <Container className="pt-5 pb-5">
                    <h3 className="title-section">UMKM</h3>
                    { isLoading ? <div className="loading">Loading...
    </div> :  umkm?.docs?.map((umkm, i)=>(
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
                        <Pagination isLoading={isLoading} currentPage={page} setPage={(page) => setPage(page)} totalPages={umkm?.totalPages} eventLength={umkm?.docs?.length} eventPerPage={umkmPerPage} setCurrentPage={umkm?.page}/>
                    </div>
                    : ""
                }
                
                </Container>
            </div>
        </>
    )
}

export default UmkmCard