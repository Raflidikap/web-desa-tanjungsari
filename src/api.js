export const getUmkmList = async () =>{
    const umkms = await fetch('https://joyous-pink-catfish.cyclic.app/umkm')
    .then(res=>res.json())

    return umkms
}
