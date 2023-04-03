import React from 'react'
import Carousel from '../components/Carousel'
import Artikel from '../components/Artikel'
import Event from '../components/Event'

const beranda=()=>{
    return(
        <>
        <Carousel/>
        <Event/>
        <Artikel/>
        </>
    )
}

export default beranda