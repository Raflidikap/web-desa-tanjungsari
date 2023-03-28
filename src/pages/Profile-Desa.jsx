import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../style/profile-desa.css";
import bagan from "../assets/bagan_pemerintahan.svg";

const Profile = () => {
  return (
    <>
      <div className="profile-wrapper">
        <Row>
          <div className="organisasi-wrapper p-4">
            <Col md={{ span: 6, offset: 3 }} className="organisasi-title">
              <h2 className="text-center p-1">
                Struktur Pemerintahan Desa Tanjungsari
              </h2>
            </Col>
            <Col sm={9} className="m-auto ">
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
        <Row>
          <div className="visi-misi-wrapper p-4">
            <Container className="p-4 visi-misi-box">
              <h2>Visi & Misi Desa</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                qui assumenda debitis enim rem non possimus voluptate facilis
                perferendis optio, quaerat reprehenderit at? Quis, nemo magni
                ullam adipisci in impedit voluptatum nesciunt eligendi tempore.
                Iusto repellat excepturi quo quibusdam, nesciunt optio commodi
                impedit sed voluptate voluptas consectetur dolores tempora
                doloribus rerum quidem, non qui rem, culpa sequi temporibus!
                Exercitationem, eius reiciendis assumenda, ad in commodi
                consequatur, aliquam culpa necessitatibus soluta expedita vero
                accusamus iure tenetur. Ipsam repellendus, harum est similique,
                alias ad temporibus provident cupiditate dignissimos quam vero
                recusandae eum saepe dolores ratione rem illo autem modi ducimus
                quisquam at sequi accusantium repellat. Exercitationem magni
                odit aspernatur? Beatae eius, quo, illo repellendus asperiores
                vel corrupti in facere ex veniam nesciunt nisi. Dolorum, quidem
                consectetur saepe voluptas impedit qui rem facilis debitis
                aliquid beatae nam, consequuntur voluptates expedita
                perferendis? Quidem, distinctio non eos neque quo
                necessitatibus. Nam officiis aliquam tenetur, soluta explicabo
                libero incidunt nobis ullam cumque quas cupiditate ipsum enim
                nihil laudantium necessitatibus doloribus sit dolore quisquam
                nulla, dolorem possimus porro repellendus laborum. Dolor,
                facilis id cupiditate mollitia non porro quibusdam eius
                reiciendis nihil tempora soluta, quos molestias quod sapiente?
                Quidem asperiores atque facere deserunt dolorem fuga eius non
                veritatis!
              </p>
            </Container>
          </div>
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
