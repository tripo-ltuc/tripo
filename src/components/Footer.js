import React from "react";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const FooterPage = () => {
  return (
    <section bg="dark" variant="dark" className="font-small pt-4 footer-home">
      {/* <Row className="text-center text-md-left">
        <Col md="7">
          <h5 className="title">Footer Content</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
        </Col>
        </Row> */}
        <Container>
      <Row className="text-center">
        <Col>
          <h5 className="title">Footer Content</h5>
          <p>
            Don't forget to follow us on our socail media
          </p>
        </Col>
        <Col className="txt-social">
        <div class="col align-self-right">
          <a href="https://www.youtube.com/"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com/" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        </Col>
      </Row>
      </Container>

      <Container>
      <Row className="text-center">
        <Col><div className="footer-copyright text-center py-3">
          2021 &copy; Copyright: Exporter
          {/* <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
        </div></Col>
      </Row>
      </Container>
    </section>
  );
}

export default FooterPage;