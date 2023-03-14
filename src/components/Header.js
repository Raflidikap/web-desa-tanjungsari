import '../style/header.css'
import logo_desa from "../assets/logo-kabupaten.png"
const header = () => {
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container-fluid">
  <a class="navbar-brand ms-5" href="#">
      <img src={logo_desa} alt="Logo"class="d-inline-block align-text-left me-4"/>
      Desa Tanjungsari
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav me-4">
        <a class="nav-link active me-4" aria-current="page" href="#">Beranda</a>
        <a class="nav-link me-4" href="#">Tentang Desa</a>
        <a class="nav-link me-4" href="#">UMKM</a>
        <a class="nav-link me-4">Surat Pengajuan</a>
      </div>
    </div>
  </div>
</nav>
    )
}

export default header;