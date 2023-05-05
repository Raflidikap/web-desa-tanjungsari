import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import umkmImage from "../assets/landScapeImg.jpg";
import logo from "../assets/logo-kabupaten.png";
import * as icons from "react-bootstrap-icons";
import "../style/umkmdetail.css";


const images = [
  {
    url: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    id: 4,
  },
];

const DetailUMKM = () => {

  return (
    <>
      <div className="detailUMKM">
        <Image className="bigImageUmkm" fluid src={umkmImage}></Image>
        <Container>
          <h3 className="umkmTitle p-4 mt-5">UMKM</h3>

          <p className="umkmParagraph pt-2 ps-4 pb-4 pe-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            adipisci nulla atque ratione excepturi ducimus hic blanditiis error
            aliquid odit dolores eum exercitationem ab, eius asperiores nemo?
            Libero, sed quos inventore voluptas quidem placeat quaerat dicta
            eveniet doloremque hic aspernatur voluptate animi mollitia.
            Veritatis inventore, corporis ipsa doloribus fugiat laborum possimus
            non vitae facilis saepe soluta quaerat velit? Quod rem quibusdam
            inventore qui, magni omnis! Tempora tempore aspernatur laudantium ab
            ipsam esse vitae nemo modi maxime repellat incidunt blanditiis
            labore, optio fugiat. Magni consequuntur aut fuga minima natus
            placeat officiis porro sapiente explicabo, consectetur minus dolor
            sed soluta beatae blanditiis eveniet mollitia deleniti. Facere
            architecto minima deleniti id veniam laborum autem deserunt. Rem cum
            sapiente tempora provident excepturi harum enim, repudiandae quos
            aut dicta nemo odit nobis adipisci! Ipsam velit porro temporibus!
            Est, explicabo, eligendi natus laboriosam reiciendis inventore quo
            eum necessitatibus, nisi quos tempora. Ex quidem debitis porro
            nostrum voluptatum, voluptatibus, quae accusantium veritatis
            necessitatibus cum corrupti optio animi, laboriosam ipsam
            perferendis facere quod asperiores iusto et ad eius. Totam iusto qui
            voluptatibus nam quod quas deleniti ratione nisi doloribus nihil
            illum placeat ad tempora a, molestiae, deserunt, voluptatum odio
            unde consequuntur? Cum, architecto ex. Porro tempora sed in, magni
            vero doloremque vitae reiciendis eum expedita illo deleniti
            excepturi autem amet earum alias cum dolor quisquam ipsum, obcaecati
            adipisci, iusto esse dolorum velit quod! Voluptas aut veniam
            voluptatum quis, sunt iste vero deleniti doloribus tenetur, omnis
            praesentium, recusandae ipsum autem! Reiciendis fuga quidem,
            repudiandae numquam voluptatibus quia. Maxime, eum, mollitia neque
            quos corrupti non magni eos aperiam deserunt in temporibus sint,
            perferendis ab ad delectus modi voluptatibus fuga laborum! Natus
            fugiat fuga expedita adipisci maiores consectetur aliquam
            consequuntur ut, neque mollitia eveniet! Dolorum, repudiandae?
            Molestiae mollitia nobis ipsam repellendus, nemo sit at quis dolorum
            error. Laborum obcaecati beatae debitis?
          </p>

          <h3 className="umkmGalleryTitle pt-5">Gallery</h3>

          <Container className="umkmGalleryContainer">
            {images.map((review, i) => (
              <Row xs={3} key={i}>
                <Image
                  src={review.url}
                  className="umkmGalleryImage p-4"
                ></Image>
              </Row>
            ))}
          </Container>
        </Container>

        <div className="contactContainer p-4">
          <h3 className="contactTitle p-2">Contact</h3>
          <Row>
            <Col md={4} className="contactImgCol p-4">
              <Image src={logo} fluid className="contactImage"></Image>
            </Col>
            <Col md={8} className="contactDescriptionCol">
              <Row md={6}className="contactDescriptionRow mt-2 ps-5">
                <icons.PeopleFill className="contactIcon"/>
                <icons.PeopleFill className="contactIcon"/>
                <icons.PeopleFill className="contactIcon"/>
                <icons.PeopleFill className="contactIcon"/>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default DetailUMKM;
