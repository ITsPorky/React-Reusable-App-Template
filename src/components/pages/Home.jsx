import React from "react";
import Section from "../common/Section";
import Row from "../common/Row";
import Column from "../common/Column";
import FullSection from "../common/FullSection";
import Image from "../common/Image";
import Logo from "../../logo.svg";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <FullSection id="Section1">
        <Row direction="row">
          <Column className="text-center">
            <Image
              src={Logo}
              alt="React Logo"
              className="m-auto"
              Style="max-width: 150px;"
            />
            <h1>Page Title</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Column>
        </Row>
      </FullSection>
      <Section id="Section1">
        <Row direction="row">
          <Column className="text-center">
            <h2>Sub Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Column>
        </Row>
      </Section>
      <Section id="Section2">
        <Row direction="row">
          <Column className="text-center">
            <h3>Column 1</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Column>
          <Column className="text-center">
            <h3>Column 2</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Column>
        </Row>
      </Section>
      <Section id="Section3">
        <Row direction="row">
          <Column className="text-center m-auto">
            <h3>Column 1</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Column>
          <Column className="text-center m-auto">
            <h3>Column 2</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Column>
          <Column className="text-center m-auto">
            <h3>Column 3</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Column>
        </Row>
      </Section>
      <Section id="Testimonials">
        <Row>
          <Column className="text-center">
            <Slider
              arrows={true}
              nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
              prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
              autoplay={true}
              autoplaySpeed={5000}
              dots={true}
            >
              <div className="md:max-w-screen-md">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa minima molestiae veritatis? Facere praesentium adipisci
                  fugit ducimus corrupti ut accusantium.
                </p>
                <h4>John Doe</h4>
                <b>CEO</b>
              </div>
              <div className="md:max-w-screen-md">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa minima molestiae veritatis? Facere praesentium adipisci
                  fugit ducimus corrupti ut accusantium.
                </p>
                <h4>John Doe</h4>
                <b>CEO</b>
              </div>
              <div className="md:max-w-screen-md">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa minima molestiae veritatis? Facere praesentium adipisci
                  fugit ducimus corrupti ut accusantium.
                </p>
                <h4>John Doe</h4>
                <b>CEO</b>
              </div>
              <div className="md:max-w-screen-md">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa minima molestiae veritatis? Facere praesentium adipisci
                  fugit ducimus corrupti ut accusantium.
                </p>
                <h4>John Doe</h4>
                <b>CEO</b>
              </div>
            </Slider>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default Home;
