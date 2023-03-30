import { useState } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import React from "react";
import logo from "../assets/logo-kabupaten.png";
import "../style/artikel.css";
const Artikel = () => {
  const [articles] = useState([
    { title: "1", body: "lorem", category: "test", id: 1 },
    { title: "2", body: "lorem", category: "test", id: 2 },
    { title: "3", body: "lorem", category: "test", id: 3 },
  ]);
  const ArticleCard = () => {
    return articles.map((article, i) => {
      return (
        <Col key={i} xl="6" className="m-4">
          <Card className="card-article p-4">
            <Card.Img variant="top" src={logo} className="card-image me-4" />
            <Card.Body className="ps-4">
              <Card.Text>{article.category}</Card.Text>
              <Card.Title className="card-title">{article.title}</Card.Title>
              <Card.Text>{article.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  return (
    <div className="artikel-wrapper">
      <Container>
        <h2 className="text-center p-4">Artikel</h2>
        <Row className="justify-content-center">
          <ArticleCard />
        </Row>
      </Container>
    </div>
  );
};

export default Artikel;
