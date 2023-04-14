import React from "react";
import { Image, Col, Row } from "react-bootstrap";
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
    </>
  );
};

export default Profile;
