import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "../style/profile-desa.css";
import bagan from "../assets/bagan_pemerintahan.svg";
import TextCard from "../components/TextCard";
import Topografi from "../components/Topografi"

const Profile = () => {
  return (
    <>
      <div className="profile-wrapper">
        <Row className="m-auto">
          <div className="organisasi-wrapper p-4">
            <Col md={{ span: 6, offset: 3 }} className="organisasi-title">
              <h2 className="text-center p-1">
                Struktur Pemerintahan Desa Tanjungsari
              </h2>
            </Col>
            <Col sm={9} className="m-auto">
              <Image
                className="img-fluid d-block mx-auto p-2 organisasi-image"
                src={bagan}
              ></Image>
            </Col>
            {/* <Container className="rounded-8 p-2 bg-primary">
                <h2 className="text-center p-2">Struktur Organisasi Desa Tanjungsari</h2>
            </Container>
            <Container>
                    <Col sm={9} className="m-auto">
                    <Image className="img-fluid d-block mx-auto p-4" src={bagan}>
                    </Image>
                    </Col>
            </Container>     */}
          </div>
        </Row>
        <Row className="m-auto visi-misi">
          <TextCard title="Visi dan Misi" text="lorem"/>
        </Row>
        <Row className="m-auto sensus-penduduk">
          <TextCard title="Sensus Penduduk" text="lorem"/>
        </Row>
        <Row>
          <Topografi/>
        </Row>

      </div>

      {/* <Col>
            <Row>
            <div className="organisasi-wrapper">
            <Container className="rounded-8 p-2 bg-primary">
                <h2 className="text-center p-2">Struktur Organisasi Desa Tanjungsari</h2>
            </Container>
            <Container>
                    <Col sm={9} className="m-auto">
                    <Image className="img-fluid d-block mx-auto p-4" src={bagan}>
                    </Image>
                    </Col>
            </Container>    
            </div>
            </Row>
            <Row>
            <div className="visi-misi-wrapper p-4">
            <Container className="rounded-6 p-4 visi-misi-box">
                <h2>Visi & Misi Desa</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum nisi officiis commodi minus numquam veritatis maxime excepturi quos sit est cum, tenetur dolor cupiditate? Neque deleniti nihil consequuntur iste?</p>
            </Container>
            </div>
            </Row>
        </Col> */}
    </>
  );
};

export default Profile;
