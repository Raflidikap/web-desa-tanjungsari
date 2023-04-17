import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import "../style/profile-desa.css";
import baganDesa from "../assets/baganTanjungsari.svg";
// import bagan from "../assets/bagan_pemerintahan.svg";
// import TextCard from "../components/TextCard";
import Topografi from "../components/Topografi";
import logoDesa from "../assets/logo-kabupaten.png";

const Profile = () => {
  return (
    <>
      <div className="desaDescriptionContainer">
        <Container className="">
          <Row className="p-5 ms-4 me-4 desaDescriptionRow">
            <Col sm={4}>
              <Image src={logoDesa} className="img-fluid pt-2"></Image>
            </Col>
            <Col sm={8}>
              <h3 className="desaDescriptionTitle">Desa Tanjungsari</h3>
              <p className="desaDescriptionParagraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                corporis maiores dolore dignissimos minus temporibus, adipisci
                voluptas delectus unde, at vero commodi ipsa molestias
                distinctio voluptate, error dolorem fugit necessitatibus vitae
                veniam nobis perspiciatis ipsum. Molestiae reiciendis ab
                excepturi eveniet atque? Quam aperiam est ducimus quia vitae
                omnis voluptas sed, possimus qui nulla. Exercitationem pariatur
                consequatur deleniti! Ipsam, omnis natus. Labore quibusdam
                sapiente tempora accusamus? Accusamus voluptas sed molestias
                culpa perspiciatis facere ipsam veniam, voluptates natus id iure
                voluptatem doloribus laborum vel nulla numquam, repellat fugit,
                expedita recusandae adipisci. Quis, harum. Fugit, harum, porro
                sapiente, laudantium perferendis fuga esse eum odit reiciendis
                modi blanditiis veritatis quibusdam. Accusamus recusandae,
                blanditiis, ea ad fugit repellat vitae laboriosam voluptates non
                dicta, a ipsum eum minus obcaecati vel rerum. Et provident
                maxime, impedit suscipit corrupti quas consequatur similique
                nostrum quidem quibusdam repudiandae sapiente temporibus error
                consectetur assumenda maiores veniam porro illo, autem nam
                delectus.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pemerintahanDescriptionContainer p-4">
        <Container>
        <h3 className="pemerintahanTitle mb-4">
          Struktur Pemerintahan Desa Tanjungsari
        </h3>
          <Row className="p-5 ms-4 me-4 kepalaDesaRow">
            <Col sm={8}>
              <h3 className="kepalaDesaTitle">Kepala Desa</h3>
              <p className="kepalaDesaParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident laborum rem velit alias doloribus iure eum quas.
                Eaque, corporis tempore a temporibus totam exercitationem itaque
                culpa, deserunt fugit dolore debitis ad molestiae eveniet
                repellat eius alias. Voluptatum repellat ea facere quibusdam
                magnam deleniti officiis quas esse, obcaecati aliquam nesciunt,
                totam eius quo nobis provident cupiditate sapiente assumenda qui
                sequi, ex ratione perferendis aut unde. Repellat expedita totam
                nobis voluptatem quae ut exercitationem aliquam quis inventore
                tenetur, soluta nisi assumenda commodi est dolorum itaque?
                Quaerat minus animi laudantium exercitationem, in quasi deleniti
                recusandae quis temporibus. Quisquam quibusdam odio consequuntur
                veritatis inventore.
              </p>
            </Col>
            <Col
              sm={4}
              className="d-flex align-items-center justify-content-end"
            >
              <Image src={logoDesa} className="img-fluid kepalaDesaImg"></Image>
            </Col>
          </Row>
        </Container>
        <div className="baganImage">
          <Image src={baganDesa} className="img-fluid mx-auto d-block"></Image>
          <p className="text-center baganAlt">
            Bagan Pemerintahan Desa Tanjungsari
          </p>
        </div>
      </div>
      <div className="visiDanMisiContainer p-4">
        <Row className="visiDanMisiRow">
          <Col md={6}>
            <h3 className="text-center visiContainer">Visi Desa Tanjungsari</h3>
            <ul>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
            </ul>
          </Col>
          <Col md={6}>
            <h3 className="text-center misiContainer">Misi Desa Tanjungsari</h3>
            <ul>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
              <li>Foya</li>
            </ul>
          </Col>
        </Row>
      </div>
      <Topografi />
    </>
  );
};

export default Profile;
