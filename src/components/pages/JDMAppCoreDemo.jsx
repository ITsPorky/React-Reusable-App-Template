import React, { useRef } from "react";
import Section from "../common/Section";
import Row from "../common/Row";
import Column from "../common/Column";
import FullSection from "../common/FullSection";
import Button from "../common/Button";
import { useModalDialog } from "../../JDMAppCore/JDMAppCore";
// import { AskQuestion, ModalDialog } from "../../JDMAppCore/JDMAppCore";

const JDMAppCoreDemo = () => {
  // const modalRef = useRef(null);
  // const askQuestionRef = useRef(null);

  const { showModalDialog } = useModalDialog();

  const createModalDialog = () => {
    showModalDialog();
  };

  const contents = (
    <div>
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
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
                createModalDialog(contents);
                // modalRef.current.setTitle("New Title 1!");
                // modalRef.current.setContents(contents);
                // modalRef.current.show();
              }}
              text={"Click to test ModalDialog 1"}
            />
            <Button
              onClick={() => {
                createModalDialog('content descripton stuff');
                // modalRef.current.setTitle("New Title 2!");
                // modalRef.current.setContents(<p>Content 2</p>);
                // modalRef.current.show();
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
                // askQuestionRef.current.show();
              }}
              text={"Click to test AskQuestion 1"}
            />
            <Button
              onClick={() => {
                // askQuestionRef.current.setTitle("New Title 3!");
                // askQuestionRef.current.setContents(<p>Content 3</p>);
                // askQuestionRef.current.show();
              }}
              text={"Click to test AskQuestion 2"}
            />
          </Column>
        </Row>
      </Section>
      {/* <AskQuestion ref={askQuestionRef} title="Ask Question" />
      <ModalDialog
        ref={modalRef}
        title="Example Modal"
        contents={<p>This is a modal content</p>}
        portalRoot={document.body}
      /> */}
    </>
  );
};

export default JDMAppCoreDemo;
