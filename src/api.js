import axios from "axios"

export const getUmkmList = async (page, limit) =>{
    const umkms = await fetch(`${process.env.REACT_APP_BASEURL}umkm?page=${page}&limit=${limit}`)
    .then(res=>res.json())
    return umkms
}
export const getPostList = async () =>{
    const posts = await fetch(`${process.env.REACT_APP_BASEURL}posts?page=1&limit=3`)
    .then(res=>res.json())
    return posts
}
export const getEventList = () =>{
    const events = axios.post(`${process.env.REACT_APP_BASEURL}posts/search?page=1&limit=1`, {
        category: 'event',
        })
    return events
}
export const getArticleList = () =>{
    const articles = axios.post(`${process.env.REACT_APP_BASEURL}/posts/search?page=1&limit=1`, {
        category: 'article',
        })

    return articles
}

export const getUmkmListById = (id) =>{
    const umkms = axios.post(`${process.env.REACT_APP_BASEURL}/umkm/get-by-id`,{
        id: id
    })

    return umkms
}