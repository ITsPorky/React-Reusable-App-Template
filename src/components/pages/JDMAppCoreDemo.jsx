import React, { useRef } from "react";
import Section from "../common/Section";
import Row from "../common/Row";
import Column from "../common/Column";
import FullSection from "../common/FullSection";
import Button from "../common/Button";
import { AskQuestion, ModalDialog } from "../../JDMAppCore/JDMAppCore";

const JDMAppCoreDemo = () => {
  const modalRef = useRef(null);
  const askQuestionRef = useRef(null);

  const contents = (
    <div>
      <h3>Content</h3>
      <p>this is the body of my content!</p>
    </div>
  );

  return (
    <>
      <FullSection id="FullSection1">
        <Row direction="row">
          <Column className="text-center">
            <h1>Component and Style Examples</h1>
            <p>This Page showcases each component and styles.</p>
            <Button
              onClick={() => {
                modalRef.current.setTitle("New Title 1!");
                modalRef.current.setContents(contents);
                modalRef.current.show();
              }}
              text={"Click to test ModalDialog 1"}
            />
            <Button
              onClick={() => {
                modalRef.current.setTitle("New Title 2!");
                modalRef.current.setContents(<p>Content 2</p>);
                modalRef.current.show();
              }}
              text={"Click to test ModalDialog 2"}
            />
          </Column>
        </Row>
      </FullSection>
      <Section id="Section1">
        <Row direction="row">
          <Column className="text-center">
            <h1>Component and Style Examples</h1>
            <p>This Page showcases each component and styles.</p>
            <Button
              onClick={() => {
                askQuestionRef.current.show();
              }}
              text={"Click to test AskQuestion 1"}
            />
            <Button
              onClick={() => {
                askQuestionRef.current.setTitle("New Title 3!");
                askQuestionRef.current.setContents(<p>Content 3</p>);
                askQuestionRef.current.show();
              }}
              text={"Click to test AskQuestion 2"}
            />
          </Column>
        </Row>
      </Section>
      <AskQuestion ref={askQuestionRef} title="Ask Question" />
      <ModalDialog
        ref={modalRef}
        title="Example Modal"
        contents={<p>This is a modal content</p>}
        portalRoot={document.body}
      />
    </>
  );
};

export default JDMAppCoreDemo;
