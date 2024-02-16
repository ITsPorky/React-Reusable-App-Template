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
import Code from "../common/Code";
import CodeBlock from "../common/CodeBlock";
import Toast from "../common/Toast";
import Notification from "../common/Notification";
import Button from "../common/Button";

const Docs = () => {
  return (
    <>
      <FullSection id="TopSection" backgroundImage={Logo}>
        <Row direction="row">
          <Column className="text-center">
            <Image
              src={Logo}
              alt="React Logo"
              className="m-auto"
              Style="max-width: 150px;"
            />
            <h1>Documentation</h1>
            <p>
              This page will contain documentation and examples of how to use
              the template and components.
            </p>
          </Column>
        </Row>
      </FullSection>
      <Section id="Setup">
        <Row direction="row">
          <Column className="text-center">
            <h2>Setup</h2>
            <p>How to setup the tempalte and begin working on your project.</p>
          </Column>
        </Row>
        <Row direction="row">
          <Column>
            <b>
              To use this template simply clone the repository and install all
              dependencies using:
            </b>
            <CodeBlock>npm install</CodeBlock>
            <p>OR</p>
            <CodeBlock>npm i</CodeBlock>
            <br />
            <b>Then you can run the app by using the following command:</b>
            <CodeBlock>npm run start</CodeBlock>
          </Column>
        </Row>
      </Section>
      <Section id="Docs">
        <Row direction="row">
          <Column className="text-center">
            <h2>Components</h2>
            <p>
              This section contains information on how the re-usable components
              in this template work, and how to use them.
            </p>
          </Column>
        </Row>
      </Section>
      <Section id="Layout">
        <Row direction="row">
          <Column className="text-center">
            <h3>Layout Components</h3>
            <p>
              This section contains information on how the re-usable layout
              components in this template work, and how to use them.
            </p>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Header</h4>
            <p>
              A header component for displaying Site branding, Nav links and
              other content. An example of this component can be seen as the
              header of this site.
            </p>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<Header>
  <NavMenu>
    <NavItem link={"/"} name={"Home"} />
    <NavItem link={"/docs"} name={"Docs"} />
    <NavItem link={"/Contact"} name={"Contact"} />
  </NavMenu>
</Header>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Footer</h4>
            <p>
              A Footer component for displaying Site branding, Nav links and
              other contact information. An example of this component can be
              seen as the footer of this site.
            </p>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>{`<Footer />`}</CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>FullSection</h4>
            <p>
              The FullSection component is a container component that is used to
              wrap children components. The FullSection will span the full width
              of the site.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<FullSection>
    <Row>
        <Column></Column>
    </Row>
</FullSection>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Section</h4>
            <p>
              The Section component is a container component that is used to
              wrap children components. The Section will span the fullwidth of
              the page but wil then be restircted to contain the contents in the
              center of the screen.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<Section>
    <Row>
        <Column></Column>
    </Row>
</Section>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Row</h4>
            <p>
              The Row component holds Column components into a flex-row that
              will responsivly wrap the columns.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<Row>
  <Column></Column>
</Row>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Column</h4>
            <p>
              The Column component holds content in a column within a Row
              component. Columns added to a Row component will sit next to
              eachother within the row until wrapping responsivly.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>{`<Column>
  <h2>Title</h2>
  <p>Column Content...</p>
</Column>`}</CodeBlock>
          </Column>
        </Row>
      </Section>
      <Section id="Utility">
        <Row direction="row">
          <Column className="text-center">
            <h3>Utility Components</h3>
            <p>
              This section contains information on how the re-usable layout
              components in this template work, and how to use them.
            </p>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>NavMenu</h4>
            <p>
              The NavMenu component manages NavItem components to create
              navigation links for the site.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<NavMenu>
  <NavItem link={"/"} name={"Home"} />
  <NavItem link={"/Demo"} name={"Demo"} />
  <NavItem link={"/Contact"} name={"Contact"} />
</NavMenu>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>NavItem</h4>
            <p>
              The NavItem component is responsible for creating Navigation links
              for the site.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>link</Code>: This prop takes in the link for the Navitem.
              </li>
              <li>
                <Code>name</Code>: This prop takes in the name or text that will
                be assigned to the button.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<NavMenu>
  <NavItem link={"/"} name={"Home"} />
  <NavItem link={"/Demo"} name={"Demo"} />
  <NavItem link={"/Contact"} name={"Contact"} />
</NavMenu>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>DropdownMenu</h4>
            <p>
              The DropdownMenu component is used to create dropdown menus on
              navlinks that contain extra options. The Dropdown menu component
              should be used within a NavItem Component or any component you
              wish to add a dropdown menu too.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>link</Code>: This prop takes in the link for the Navitem.
              </li>
              <li>
                <Code>name</Code>: This prop takes in the name or text that will
                be assigned to the button.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<NavMenu>
    <NavItem
        link={"#"}
        name={"Dropdown"}
        iconRight={Icon}
    >
        <DropdownMenu>
          <NavItem />
          <NavItem />
          <NavItem />
        </DropdownMenu>
    </NavItem>
</NavMenu>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Drawer</h4>
            <p>
              The Drawer component is used to create Drawer menus that will
              slide in from the side and contain the desired content.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>openIcon</Code>: This prop takes an icon in to be used for
                the open drawer toggle container.
              </li>
              <li>
                <Code>closeIcon</Code>: This prop takes an icon in to be used
                for the close drawer toggle container.
              </li>
              <li>
                <Code>openText</Code>: This prop takes text in to be used for
                the open drawer toggle container.
              </li>
              <li>
                <Code>closeText</Code>: This prop takes text in to be used for
                the close drawer toggle container.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<Drawer
    openIcon={Icon}
    closeIcon={Icon}
    openText={'Open'}
    closeText={'Close'}
>
    <NavMenu>
        <NavItem link={"/"} name={"Home"} />
        <NavItem link={"/Demo"} name={"Demo"} />
        <NavItem link={"/Contact"} name={"Contact"} />
    </NavMenu>
</Drawer>`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>DarkMode</h4>
            <p>
              The DarkMode component is a toggle component that will toggle a
              light/dark mode version of the site.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>icon</Code>: This prop takes an icon that will be used for
                the toggle button.
              </li>
              <li>
                <Code>text</Code>: This prop takes text that will be used for
                the toggle button.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>
              {`<DarkMode icon={Icon} text={'Toggle Dark Mode'} />`}
            </CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Button</h4>
            <p>
              The Button component will add a styled button component to th
              site.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>icon</Code>: This prop takes an icon that will be used for
                the toggle button.
              </li>
              <li>
                <Code>text</Code>: This prop takes text that will be used for
                the toggle button.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>{`<Button text={"Click here to test!"} />`}</CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Tooltip</h4>
            <p>
              The Tooltip component adds a tooltip that appears when the item is
              hovered.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>element</Code>: Component to which the tooltip is applied.
              </li>
              <li>
                <Code>text</Code>: Text displayed in the tooltip.
              </li>
              <li>
                <Code>position</Code>: Position of the tooltip. (top, right,
                left, bottom)
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>{`<Tooltip
  element={<p>Hover me</p>}
  tooltipText="Tooltip text..."
  position="left"
/>`}</CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Toast</h4>
            <p>
              The Toast component displays a popup at the bottom of the screen
              when clicked.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>title</Code>: Title displayed in the popup.
              </li>
              <li>
                <Code>text</Code>: Information text displayed in the popup.
              </li>
              <li>
                <Code>duration</Code>: Duration of the popup before closing.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>{`<Toast
    title={"Toast"}
    text={"This is an example of the Toast component..."}
>
    <Button text={"Click here to test!"} />
</Toast>`}</CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Notification</h4>
            <p>
              The Notification component displays a popup at the top right when
              clicked.
            </p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>title</Code>: Title displayed in the popup.
              </li>
              <li>
                <Code>text</Code>: Information text displayed in the popup.
              </li>
              <li>
                <Code>duration</Code>: Duration of the popup before closing.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>{`<Notification
    title={"Notification"}
    text={"This is an example of the Notification component..."}
>
    <Button text={"Click here to test!"} />
</Notification>`}</CodeBlock>
          </Column>
        </Row>
        <Row className="items-center">
          <Column>
            <h4>Image</h4>
            <p>The Image component adds an image to the site.</p>
            <b>props:</b>
            <ul>
              <li>
                <Code>id</Code>: Assigns an ID to the HTML element.
              </li>
              <li>
                <Code>className</Code>: Adds classes to the HTML element.
              </li>
              <li>
                <Code>Style</Code>: Adds inline styles to the HTML element.
              </li>
              <li>
                <Code>src</Code>: Source of the image.
              </li>
              <li>
                <Code>alt</Code>: Alt text for the image.
              </li>
            </ul>
          </Column>
          <Column>
            <b>Example:</b>
            <CodeBlock>{`<Image src="/image.png" alt="Image alt text..." />`}</CodeBlock>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default Docs;
