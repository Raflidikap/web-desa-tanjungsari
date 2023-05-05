export const getUmkmList = async () =>{
    const umkms = await fetch(`${process.env.REACT_APP_BASEURL}umkm?page=1&limit=3`)
    .then(res=>res.json())
    return umkms
}
export const getPostList = async () =>{
    const posts = await fetch(`${process.env.REACT_APP_BASEURL}posts?page=1&limit=3`)
    .then(res=>res.json())
    return posts
}
