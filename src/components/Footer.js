
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram, // Import Instagram icon
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Developed by M.Rizki Subhan</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} MRS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MrSubhan24"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/m-rizki-subhan-a5b908240/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mr_subhan24/"
                style={{ color: "white" }}
              >
                <AiFillInstagram /> {/* Instagram icon */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
