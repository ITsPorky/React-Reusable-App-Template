# React App Template

The React App Template provides a robust foundation for swiftly setting up responsive and feature-rich React.js applications.

## Contents

- [Setup](#setup)
- [Components](#components)

### Setup

To utilize this template, clone the repository and install dependencies with the following commands:

```bash
npm install
```

or

```bash
npm i
```

Then launch the application with:

```bash
npm run start
```

### Components

#### Layout Components

The template includes the following layout components:

- [Header](#header)
- [Footer](#footer)
- [FullSection](#fullsection)
- [Section](#section)
- [Row](#row)
- [Column](#column)

##### Header

The Header component serves as a template for the site's header, accepting a NavMenu as its child.

Example:

```JavaScript
<Header>
    <NavMenu></NavMenu>
</Header>
```

#### Footer

The Footer component acts as a template for the site's footer and does not require any children.

Example:

```JavaScript
<Footer />
```

##### FullSection

The FullSection component is a container that spans the full width of the site, accommodating child components.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.

Example:

```JavaScript
<FullSection>
    <Row>
        <Column></Column>
    </Row>
</FullSection>
```

##### Section

The Section component is a container that spans the full width of the page but restricts contents to the center.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.

Example:

```JavaScript
<Section>
    <Row>
        <Column></Column>
    </Row>
</Section>
```

##### Row

The Row component holds Column components in a flex-row, responsively wrapping the columns.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.

Example:

```JavaScript
<Row>
    <Column></Column>
    <Column></Column>
</Row>
```

##### Column

The Column component holds content in a column within a Row component, allowing responsive wrapping.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.

Example:

```JavaScript
<Row>
    <Column>
        <h2>Column 1</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, autem?</p>
    </Column>
    <Column>
        <h2>Column 2</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, autem?</p>
    </Column>
</Row>
```

#### Utility Components

- [NavMenu](#navmenu)
- [NavItem](#navitem)
- [DropdownMenu](#dropdownmenu)
- [Drawer](#drawer)
- [DarkMode](#darkmode)
- [Button](#button)
- [Tooltip](#tooltip)
- [Toast](#toast)
- [Notification](#notification)
- [Image](#image)

##### NavMenu

The NavMenu component manages NavItem components to create navigation links for the site.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.

Example:

```JavaScript
<NavMenu>
    <NavItem link={"/"} name={"Home"} />
    <NavItem link={"/Demo"} name={"Demo"} />
    <NavItem link={"/Contact"} name={"Contact"} />
</NavMenu>
```

##### NavItem

The NavItem component creates navigation links for the site.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `link`: URL for the NavItem.
- `name`: Text displayed for the link.

Example:

```JavaScript
<NavMenu>
    <NavItem link={"/"} name={"Home"} />
    <NavItem link={"/Demo"} name={"Demo"} />
    <NavItem link={"/Contact"} name={"Contact"} />
</NavMenu>
```

##### DropdownMenu

The DropdownMenu component creates dropdown menus for navlinks with additional options.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.

Example:

```JavaScript
<NavMenu>
    <NavItem
        link={"#"}
        name={"Dropdown"}
        iconRight={<FontAwesomeIcon icon={faChevronDown} />}
    >
        <DropdownMenu>
            <NavItem link={"/"} name={"Home"} />
            <NavItem link={"/Demo"} name={"Demo"} />
            <NavItem link={"/Contact"} name={"Contact"} />
        </DropdownMenu>
    </NavItem>
</NavMenu>
```

##### Drawer

The Drawer component creates slide-in menus from the side containing desired content.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `openText`: Text for the open drawer toggle.
- `closeText`: Text for the close drawer toggle.

Example:

```JavaScript
<Drawer
    openIcon={<FontAwesomeIcon icon={faBars} fontSize={20} />}
    closeIcon={<FontAwesomeIcon icon={faXmark} fontSize={20} />}
    openText={'Open'}
    closeText={'Close'}
>
    <NavMenu>
        <NavItem link={"/"} name={"Home"} />
        <NavItem link={"/Demo"} name={"Demo"} />
        <NavItem link={"/Contact"} name={"Contact"} />
    </NavMenu>
</Drawer>
```

##### DarkMode

The DarkMode component toggles between light and dark mode for the site.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `icon`: Icon for the toggle button.
- `text`: Text for the toggle button.

Example:

```JavaScript
<DarkMode icon={<FontAwesomeIcon icon={faCircleHalfStroke} fontSize={20} />} text={'Toggle Dark Mode'} />
```

##### Button

The Button component adds a styled button to the site.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `text`: Text displayed on the button.

Example:

```JavaScript
<Button text={"Click here to test!"} />
```

##### Tooltip

The Tooltip component adds a tooltip that appears when the item is hovered.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `element`: Component to which the tooltip is applied.
- `tooltipText`: Text displayed in the tooltip.
- `position`: Position of the tooltip.

Example:

```JavaScript
<Tooltip
    element={<p>Hover me</p>}
    tooltipText="Tooltip text..."
    position="left"
/>
```

##### Toast

The Toast component displays a popup at the bottom of the screen when clicked.

**Props:**

- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `title`: Title displayed in the popup.
- `text`: Information text displayed in the popup.
- `timer`: Duration of the popup before closing.

Example:

```JavaScript
<Toast
    title={"Toast"}
    text={"This is an example of the Toast component..."}
>
    <Button text={"Click here to test!"} />
</Toast>
```

##### Notification

The Notification component displays a popup at the top right when clicked.

**Props:**

- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `title`: Title displayed in the popup.
- `text`: Information text displayed in the popup.
- `timer`: Duration of the popup before closing.

Example:

```JavaScript
<Notification
    title={"Notification"}
    text={"This is an example of the Notification component..."}
>
    <Button text={"Click here to test!"} />
</Notification>
```

##### Image

The Image component adds an image to the site.

**Props:**

- `id`: Assigns an ID to the HTML element.
- `className`: Adds classes to the HTML element.
- `Style`: Adds inline styles to the HTML element.
- `src`: Source of the image.
- `alt`: Alt text for the image.

Example:

```JavaScript
<Image
    src="/image.png"
    alt="Image alt text..."
/>
```

## End Notes

These components provide a comprehensive toolkit for building versatile and engaging React applications.
