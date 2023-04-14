import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as icons from "react-bootstrap-icons";
import '../style/topografi.css'

const Penduduk = () => {
  return (
    <div className="topografi">
      <Container className="topografi-container">
        <Row>
          <Col className="md-6 text-center">
            <iframe
              title="Desa Tanjungsari"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63412.13944792734!2d107.10882783810534!3d-6.614744725395308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69a57e6a557fd7%3A0x6671068155bb67ea!2sKec.%20Tanjungsari%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1678783079104!5m2!1sid!2sid"
              width="600"
              height="450"
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col className="md-6">
            <h2 className="topografi-title">Desa Tanjungsari Kab. Bogor</h2>
            <Row className="md-6 pt-5 topografi-row-wrapper">
              <Col className="topografi-col-wrapper">
                <icons.PeopleFill className="topografi-icons" />
                <h5>3500</h5>
                <h4>Penduduk</h4>
              </Col>
              <Col className="topografi-col-wrapper">
                <icons.PeopleFill className="topografi-icons" />
                <h5>3500</h5>
                <h4>Penduduk</h4>
              </Col>
            </Row>
            <Row className="md-6 pt-5">
              <Col className="topografi-col-wrapper">
                <icons.PeopleFill className="topografi-icons" />
                <h5>3500</h5>
                <h4>Penduduk</h4>
              </Col>
              <Col className="topografi-col-wrapper">
                <icons.PeopleFill className="topografi-icons" />
                <h5>3500</h5>
                <h4>Penduduk</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Penduduk;
