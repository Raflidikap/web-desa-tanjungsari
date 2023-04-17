import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../style/videopromote.css'

const VideoPromote = () => {
  return (
    <div className="videoPromoteWrapper p-5">
      <Container className="videoPromoteContainer">
        <Row className="videoPromoteRow">
          <Col className="xl-6 pt-4">
            <iframe
            className="pe-5 videoFrame responsive-iframe"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </Col>
          <Col className="xl-6 pt-3 videoTextWrapper">
            <h3 className="videoPromoteTitle">Literasi Digital</h3>
            <p className="videoPromoteParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga debitis nobis commodi numquam at sint laboriosam velit ex. Molestias quibusdam nam iure. Dolorum tenetur ex deleniti nihil recusandae modi earum a magni, id iste, molestiae illum aliquid delectus nemo molestias officiis. Alias temporibus necessitatibus fuga deleniti rem! Voluptatem suscipit ab error. Totam sed velit, esse inventore delectus doloremque ducimus, commodi eius natus exercitationem officia laborum vel sint eligendi consequatur voluptatibus? Exercitationem asperiores vitae sapiente distinctio praesentium neque blanditiis, deleniti facere, hic nulla alias architecto temporibus. Illum autem maiores molestiae explicabo? Vero eum excepturi dignissimos id inventore quas impedit enim dolores molestias quae, harum eos in nostrum aperiam minus praesentium aliquid aliquam voluptatum doloribus dolore. Animi omnis quos adipisci in. Quis, mollitia? Suscipit aperiam asperiores labore repudiandae accusamus dolorem totam tempora vero consectetur. Placeat, est. Praesentium aliquam atque repellat saepe magni nostrum optio perferendis, omnis voluptatum dignissimos debitis aperiam nesciunt!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoPromote;
