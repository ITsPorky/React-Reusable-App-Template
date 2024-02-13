import React from "react";
import Section from "../common/Section";
import Row from "../common/Row";
import Column from "../common/Column";
import FullSection from "../common/FullSection";
import Toast from "../common/Toast";
import Notification from "../common/Notification";

const Demo = () => {
  return (
    <>
      <FullSection id="FullSection1">
        <Row direction="row">
          <Column className="text-center">
            <h1>Component and Style Examples</h1>
            <p>This Page showcases each component and styles.</p>
          </Column>
        </Row>
      </FullSection>
      <Section id="Section1">
        <Row direction="row">
          <Column className="text-center">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <br />
            <p>Paragraph</p>
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
            <Notification
              title={"Notification"}
              text={"This is an example of the Notification component..."}
            >
              <a>Click here to test!</a>
            </Notification>
          </Column>
          <Column className="text-center">
            <h3>Toast</h3>
            <Toast
              title={"Toast"}
              text={"This is an example of the Toast component..."}
            >
              <a>Click here to test!</a>
            </Toast>
          </Column>
        </Row>
      </Section>
      <FullSection id="FullSection2" className="test-outline">
        <Row direction="row" className="test-outline">
          <Column className="text-center test-outline">
            <h1>Component and Style Examples</h1>
            <p>This Page showcases each component and styles.</p>
          </Column>
        </Row>
      </FullSection>
      <Section id="Section2" className="test-outline">
        <Row direction="row" className="test-outline">
          <Column className="text-center test-outline">
            <h2>Column 1</h2>
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
          <Column className="text-center test-outline">
            <h2>Column 2</h2>
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
      <Section id="Section3" className="test-outline">
        <Row direction="row" className="test-outline">
          <Column className="text-center test-outline">
            <h2>Column 1</h2>
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
          <Column className="text-center test-outline">
            <h2>Column 2</h2>
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
          <Column className="text-center test-outline">
            <h2>Column 3</h2>
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
    </>
  );
};

export default Demo;
