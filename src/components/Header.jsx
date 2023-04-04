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

      <Navbar bg="light" expand="lg" className='bg-body-tertiary sticky-top'>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Navbar.Brand href="#" className="ms-5">
            <img
              src={logo_desa}
              className="d-inline-block align-text-left me-4 ms-5"
              alt="desa tanjungsari"
            />
            Desa Tanjungsari
          </Navbar.Brand>
        </Container>
          <Nav className="mx-auto">
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
      
    </Navbar>
    )
}

export default header;