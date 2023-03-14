import '../style/topografi.css'

const Penduduk = () =>{
    return(
        <div className="topografi">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <iframe title='Desa Tanjungsari' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63412.13944792734!2d107.10882783810534!3d-6.614744725395308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69a57e6a557fd7%3A0x6671068155bb67ea!2sKec.%20Tanjungsari%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1678783079104!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">
                        <h1>Jumlah Penduduk</h1>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default Penduduk