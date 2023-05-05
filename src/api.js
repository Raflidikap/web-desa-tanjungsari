export const getUmkmList = async () =>{
    const umkms = await fetch('https://joyous-pink-catfish.cyclic.app/umkm?page=1&limit=3')
    .then(res=>res.json())
    console.log(umkms)
    return umkms
}
