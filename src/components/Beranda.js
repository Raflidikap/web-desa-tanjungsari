import pemandangan from '../assets/pemandangan.jpg'
import "../style/beranda.css"
const beranda=()=>{
    return(
        <>
        <div className='beranda'>
            <div className="container">
                <div class="row about-items justify-content-center align-items-center">
                    <div class="col-lg-6">
                        <img  class="profile-image text-center" src={pemandangan} alt=""/>
                </div>
                    <div class="col-lg-6">
                        <p className='desc'>
                        Desa Tanjungsari adalah salah satu Desa di wilayah 
                        Kecamatan Tanjungsari Kabupaten Bogor dengan Luas Wilayah 
                        kurang lebih 760,15 Ha. Dan secara Administrasi terbagi dalam 4 
                        Dusun, 8 RW dan 18 RT. Dengan batas-batas wilayah sebagai-
                        berikut :
                        <br/>Sebelah Utara berbatasan dengan Desa Pasirtanjung.
                        <br/>Sebelah Timur berbatasan dengan Desa Sirnasari.
                        <br/>Sebelah Selatan berbatasan dengan Desa Sirnarasa.
                        <br/>Sebelah Barat berbatasan dengan Desa Cibadak.
                        </p>

                        <a href="" className="">
                            <p className="text-start">Selengkapnya <i class="bi bi-arrow-right"></i></p>
                        </a>
                    </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default beranda