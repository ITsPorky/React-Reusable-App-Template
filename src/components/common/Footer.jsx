import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";
import Row from "./Row";
import Column from "./Column";
import Image from "./Image";
import Logo from "../../logo.svg";

const Footer = () => {
    let currentYear = new Date().getFullYear();
  return (
    <footer id="Footer">
      <Section>
        <Row className="flex-row">
          <Column className="md:w-1/2 flex-row">
            <Image src={Logo} alt="Logo" Style='max-width: 100px;' />
            <p>React Template</p>
          </Column>
          <Column className="w-1/2">
            <h6>Quick Links</h6>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Column>
          <Column className="w-1/2">
            <h6>Other Links</h6>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Column>
          <Column className="md:w-1/2">
            <h6>Contact</h6>
            <ul>
              <li>
                <p><FontAwesomeIcon icon={faLocationDot} /> 123 Example Street, QLD 4000</p>
              </li>
              <li>
                <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:enquiries@example.com">enquiries@example.com</a></p>
              </li>
              <li>
                <p><FontAwesomeIcon icon={faPhone} /> <a href='tel:0404040404'>0404 040 404</a></p>
              </li>
            </ul>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className="p-0 py-1">
            <Column className="text-center p-0">
                <small>React Template © {currentYear} Wade Walsh</small>
            </Column>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
