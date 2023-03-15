import '../style/header.css'
import logo_desa from "../assets/logo-kabupaten.png"
import React from 'react'
const header = () => {
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
  <a className="navbar-brand ms-5" href="#">
      <img src={logo_desa} alt="Logo"className="d-inline-block align-text-left me-4"/>
      Desa Tanjungsari
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav me-4">
        <a className="nav-link active me-4" aria-current="page" href="#">Beranda</a>
        <a className="nav-link me-4" href="#">Tentang Desa</a>
        <a className="nav-link me-4" href="#">UMKM</a>
        <a className="nav-link me-4">Surat Pengajuan</a>
      </div>
    </div>
  </div>
</nav>
    )
}

export default header;