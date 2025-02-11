import React, { useRef } from "react";
import Section from "../common/Section";
import Row from "../common/Row";
import Column from "../common/Column";
import FullSection from "../common/FullSection";
import Button from "../common/Button";
import { ModalDialog } from "../../JDMAppCore/JDMAppCore";

const JDMAppCoreDemo = () => {
  const modalRef = useRef(null);

  return (
    <>
      <FullSection id="FullSection1">
        <Row direction="row">
          <Column className="text-center">
            <h1>Component and Style Examples</h1>
            <p>This Page showcases each component and styles.</p>
            <ModalDialog
              ref={modalRef}
              title="Example Modal"
              contents={<p>This is a modal content</p>}
              portalRoot={document.body}
            />
            <Button
              onClick={() => modalRef.current.show()}
              text={"Click to test ModalDialog"}
            />
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
    </>
  );
};

export default JDMAppCoreDemo;
