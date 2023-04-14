import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Pagination from "./Pagination";
import logo from "../assets/logo-kabupaten.png";
import "../style/artikel.css";

const Artikel = () => {
  const [artikels] = useState([
    { title: "Hakiki Collection", body: "lorem", author: "Admin, 4 Agustus 2023", id: 1, paragraph:"lorem ipsum dolor sit amet."},
    { title: "Kayu Haji ..", body: "lorem", author: "Admin, 4 Agustus 2023", id: 2, paragraph:"lorem ipsum dolor sit amet." },
    { title: "Konveksi Deni Dhafir", body: "lorem", author: "Admin, 4 Agustus 2023", id: 3, paragraph:"lorem ipsum dolor sit amet." },
    { title: "Hakiki Collection 2", body: "lorem", author: "Admin, 4 Agustus 2023", id: 4, paragraph:"lorem ipsum dolor sit amet." },
    { title: "Kayu Haji 2", body: "lorem", author: "Admin, 4 Agustus 2023", id: 5, paragraph:"lorem ipsum dolor sit amet." },
    { title: "Konveksi Deni Dhafir 2", body: "lorem", author: "Admin, 4 Agustus 2023", id: 6, paragraph:"lorem ipsum dolor sit amet." },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [artikelPerPage] = useState(4);

  const lastartikels = currentPage * artikelPerPage;
  const firstartikels = lastartikels - artikelPerPage;
  const currentartikels = artikels.slice(firstartikels, lastartikels);

  const ArtikelCard = () => {
    return currentartikels.map((artikel, i) => {
      return (
        <Col key={i} md="6" className="pb-4">
          <Card className="p-4 d-flex artikelCardWrapper" me-4>
            <Card.Img
              variant="start"
              src={logo}
              className="artikelImage"
            />
            <Card.Body className="p-4">
              <Card.Text className="artikelCardAuthor">{artikel.author}</Card.Text>
              <Card.Title className="artikelCardTitle">{artikel.title}</Card.Title>
              <Card.Text className="artikelCardParagraph">{artikel.paragraph}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  return (
    <>
      <div className="artikelWrapper pt-5">
        <Container className="artikelContainer pt-5">
          <h2 className="artikelTitleWrapper">Artikel Desa Tanjungsari</h2>
          <Row className="pt-5">
            <ArtikelCard />
          </Row>
          <div className="pagination-button text-center">
            <Pagination
              eventLength={artikels.length}
              eventPerPage={artikelPerPage}
              setCurrentPage={setCurrentPage}
            ></Pagination>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Artikel;
