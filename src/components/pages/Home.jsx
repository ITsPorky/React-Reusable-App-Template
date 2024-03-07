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
import Code from "../common/CodeBlock";
import Toast from "../common/Toast";
import Notification from "../common/Notification";
import Button from "../common/Button";
import Label from "../common/Label";
import PriceCard from "../common/PriceCard";
import PricingContainer from "../common/PricingContainer";

const Home = () => {
  return (
    <>
      <FullSection id="Section1" backgroundImage={Logo}>
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
      <Section>
        <Row direction="row">
          <Column className="text-center">
            <h3>Notification</h3>
            <p>
              A notification is a popup that will appear in the top right corner
              of the screen. Try it out using the button below.
            </p>
            <Notification
              title={"Notification"}
              text={"This is an example of the Notification component..."}
            >
              <Button text={"Click here to test!"} />
            </Notification>
          </Column>
          <Column className="text-center">
            <h3>Toast</h3>
            <p>
              A toast is a popup that will appear from the bottom of the screen
              like toast popping out of a toaster. Try it out using the button
              below.
            </p>
            <Toast
              title={"Toast"}
              text={"This is an example of the Toast component..."}
            >
              <Button text={"Click here to test!"} />
            </Toast>
          </Column>
        </Row>
        <Row direction="row">
          <Column className="text-center">
            <h3>Emphasise (em)</h3>
            <em>This is emphasised text...</em>
          </Column>
          <Column>
            <h3 className="text-center">Blockquote</h3>
            <blockquote>This is a blockquote example...</blockquote>
          </Column>
          <Column>
            <h3 className="text-center">Code Block</h3>
            <Code>npm install</Code>
          </Column>
        </Row>
        <Row direction="row">
          <Column className="text-center">
            <h3>Progress</h3>
            <progress max="100" value="70">
              70%
            </progress>
          </Column>
          <Column>
            <h3 className="text-center">Labels</h3>
            <Label text="Label" />
            <Label text="Success" className="success"/>
            <Label text="Error" className="error"/>
          </Column>
          <Column>
            <h3 className="text-center">Buttons</h3>
            <Button text="Primary" type="primary" className="w-full mb-2"/>
            <Button text="Secondary" type="secondary" className="w-full mb-2"/>
          </Column>
        </Row>
        <Row direction="row">
          <Column className="text-center">
            <h3>Forms</h3>
            <form action=""></form>
          </Column>
        </Row>
        <Row>
          <Column>
            <PricingContainer>
              <PriceCard title="Low Tier">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </PriceCard>
              <PriceCard className="highlighted" title="Premium Tier">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
              </PriceCard>
              <PriceCard title="High Tier">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </PriceCard>
            </PricingContainer>
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
      {/* <Section id="Testimonials">
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
      </Section> */}
    </>
  );
};

export default Home;
