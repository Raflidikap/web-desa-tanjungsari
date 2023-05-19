import React from "react";
import * as icons from 'react-bootstrap-icons';
import "../style/footer.css"
import logo from "../assets/logo-kabupaten.png"
const Footer = () =>{
    return (
        <>
          <footer
                    className="text-center text-lg-start text-dark"
                    style={{backgroundColor: "#ECEFF1"}}
                    >

                <section className="">
                <div className="container text-center text-md-start pt-5">
                    <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <img src={logo} alt="" className="img-fluid d-block mx-auto w-50 logo-footer"/>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Desa Tanjungsari</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: "60px", backgroundClip: "#7c4dff", height: "2px"}}
                            />
                        {/* <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit error provident quo mollitia sed ea ratione ipsa dolore deserunt nisi id deleniti doloremque odit pariatur, repudiandae nobis eveniet voluptatem dolorum sapiente amet magni enim fuga.
                        </p> */}
                    </div>


                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">Kontak</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                            />
                        <p><icons.BuildingFill/> </p>
                        <p><icons.EnvelopeAtFill/> desaku.tanjungsari01@gmail.com</p>
                        <p><icons.TelephoneFill/> +62 85774978615</p>
                        {/* <p><icons.TelephoneFill/> +62 8</p> */}
                    </div>
                    </div>
                </div>
                </section>

                <div
                    className="text-end p-3 pe-4 copyright-wrapper "
                    style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}
                    >
                © 2023 - Powered by FIK UPNVJ
                </div>
            </footer>  
        </>
    );
}

export default Footer;