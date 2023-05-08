import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Pagination from "./Pagination";
import "../style/artikel.css";
import { getArticleList } from "../api";

const Artikel = () => {
  const[artikel, setArtikel] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [artikelPerPage] = useState(4);

  const lastartikels = currentPage * artikelPerPage;
  const firstartikels = lastartikels - artikelPerPage;
  const currentartikels = artikel.slice(firstartikels, lastartikels);


  useEffect(()=>{
    getArticleList()
    .then( (response) =>{
      setArtikel(response.data.docs);
    })
    .catch( (error) =>{
      console.log(error);
    });
  }, [])


  const ArtikelCard = () => {

    
    return currentartikels.map((artikel, i) => {
      return (
        <Col key={i} md="6" className="pb-4">
          <Card className="p-4 d-flex artikelCardWrapper me-4">
            <Card.Img
              variant="start"
              src={artikel.image}
              className="artikelImage"
            />
            <Card.Body className="p-4">
              <Card.Text className="artikelCardAuthor">{artikel.name}</Card.Text>
              <Card.Title className="artikelCardTitle">{artikel.name}</Card.Title>
              <Card.Text className="artikelCardParagraph">
                <span dangerouslySetInnerHTML={{ __html: artikel.description }}></span>
              </Card.Text>
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
          <h2 className="artikelTitleWrapper">Artikel</h2>
          <Row className="pt-5">
            <ArtikelCard />
          </Row>
          <div className="pagination-button text-center paginationArtikel-btn">
            <Pagination
              eventLength={artikel.length}
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
