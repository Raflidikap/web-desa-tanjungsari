import '../style/header.css'
import logo_desa from "../assets/logo-kabupaten.png"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';

// const navigation = () =>[
//   {
//     {name:'Beranda', href:'/'},
//     {name:'Tentang Desa', href:'/profildesa'},
//     {name:'UMKM', href:'/umkm'},
//     {name:'Pengajuan Surat', href:'/'}
//   }
// ];

const header = () => {
  const activeLink = 'me-4 nav-link active'
  const normalLink = 'me-4 nav-link'
    return (
      // <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      //   <div className="container-fluid">
      //   <a className="navbar-brand ms-5" href="#">
      //       <img src={logo_desa} alt="Logo"className="d-inline-block align-text-left me-4"/>
      //       Desa Tanjungsari
      //     </a>
      //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      //       <div className="navbar-nav me-4">
      //         <a className="nav-link active me-4" aria-current="page" href="/">Beranda</a>
      //         <a className="nav-link me-4" href="/profiledesa">Tentang Desa</a>
      //         <a className="nav-link me-4" href="/umkm">UMKM</a>
      //         <a className="nav-link me-4" href="/umkm">Surat Pengajuan</a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>

      <Navbar bg="light" expand="lg" className='bg-body-tertiary sticky-top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo_desa}
              className="d-inline-block align-text-left me-4"
              alt="desa tanjungsari"
            />
            Desa Tanjungsari
          </Navbar.Brand>
        </Container>
          <Nav className="me-auto">
            <NavLink to='/'
            className={({isActive})=> (isActive ? activeLink : normalLink)}>
            Beranda
            </NavLink>
            <NavLink to='/profiledesa'
            className={({isActive})=> (isActive ? activeLink : normalLink)}>
            Tentang Desa
            </NavLink>
            <NavLink to='/umkm'
            className={({isActive})=> (isActive ? activeLink : normalLink)}>
            UMKM
            </NavLink>
            <NavLink to='/other'
            className={({isActive})=> (isActive ? activeLink : normalLink)}>
            Pengajuan Surat
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default header;