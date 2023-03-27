import Carousel from '../components/Carousel'
import Artikel from '../components/Artikel'
import Event from '../components/Event'

import "../style/beranda.css"
import React from 'react'

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