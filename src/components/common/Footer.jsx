import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
        <Row>
          <Column className="">
            <Image src={Logo} alt="Logo" Style="max-width: 100px;" />
            <b>React Template</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, officiis.
            </p>
          </Column>
          <Column className="!w-1/2 md:!w-full">
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
          <Column className="!w-1/2 md:!w-full">
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
          <Column className="">
            <h6>Contact</h6>
            <ul>
              <li>
                <span Style="margin-right: 10px;">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>{" "}
                <span>123 Example Street, QLD 4000</span>
              </li>
              <li>
                <span Style="margin-right: 10px;">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a href="mailto:enquiries@example.com">enquiries@example.com</a>
              </li>
              <li>
                <span Style="margin-right: 10px;">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <a href="tel:0404040404">0404 040 404</a>
              </li>
            </ul>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className="pt-0 pb-2">
          <Column className="text-center p-0">
            <small>React Template © {currentYear} Wade Walsh</small>
          </Column>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
