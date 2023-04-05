import React from "react"

const Pagination= (p) =>{ 
    let pages = []
    const pagesLength = Math.ceil(p.eventLength/p.eventPerPage)


    for(let i=1;i<= pagesLength;i++){
        pages.push(i)
    }
    return(
        <div>
            {pages.map((page, i) =>{
                return <button className="button-pagination" key={i} onClick={() => p.setCurrentPage(page)}>{page}</button>
            })}
        </div>
    )
}

export default Pagination