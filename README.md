# React App Template

A simple React.js app template that can be used to quickly setup a working app with responsive design and useful functionality.

## Contents

- [Setup](#setup)

### Setup

To use this template simply clone the repository and install all dependencies using:

```bash
npm install
```

or

```bash
npm i
```

Then you can run the app by using the following command:

```bash
    npm run start
```

### Components

#### Layout Components

This template contains the following components:

- [Header](#header)
- [Footer](#footer)
- [FullSection](#fullsection)
- [Section](#section)
- [Row](#row)
- [Column](#column)

##### Header

This component is a template for the header of your site. The header takes in a NavMenu as a child.

Example:

```JavaScript
    <Header>
        <NavMenu></NavMenu>
    </Header>
```

#### Footer

This component is a template for the footer of your site. The footer takes no children.

Example:

```JavaScript
    <Footer />
```

##### FullSection

The FullSection component is a container component that is used to wrap children components. The FullSection will span the full width of the site.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.

Example:

```JavaScript
    <FullSection>
        <Row>
            <Column></Column>
        </Row>
    </FullSection>
```

##### Section

The Section component is a container component that is used to wrap children components. The Section will span the fullwidth of the page but wil then be restircted to contain the contents in the center of the screen.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.

Example:

```JavaScript
    <Section>
        <Row>
            <Column></Column>
        </Row>
    </Section>
```

##### Row

The Row component holds Column components into a flex-row that will responsivly wrap the columns.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.

Example:

```JavaScript
    <Row>
        <Column></Column>
        <Column></Column>
    </Row>
```

##### Column

The Column component holds content in a column within a Row component. Columns added to a Row component will sit next to eachother within the row until wrapping responsivly.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.

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
- [Tooltip](#tooltip)
- [Image]()

##### NavMenu

The NavMenu component is responsible for holding NavItem components and will use them to create Navigation links for the site.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.

Example:

```JavaScript
    <NavMenu>
        <NavItem link={"/"} name={"Home"} />
        <NavItem link={"/Demo"} name={"Demo"} />
        <NavItem link={"/Contact"} name={"Contact"} />
    </NavMenu>
```

##### NavItem

The NavItem component is responsible for creating Navigation links for the site.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.
- `link` = This prop takes in the link for the Navitem.
- `name` = This prop takes in the name or text that will be assigned to the button.

Example:

```JavaScript
    <NavMenu>
        <NavItem link={"/"} name={"Home"} />
        <NavItem link={"/Demo"} name={"Demo"} />
        <NavItem link={"/Contact"} name={"Contact"} />
    </NavMenu>
```

##### DropdownMenu

The DropdownMenu component is used to create dropdown menus on navlinks that contain extra options. The Dropdown menu component should be used within a NavItem Component or any component you wish to add a dropdown menu too.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.

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

The Drawer component is used to create Drawer menus that will slide in from the side and contain the desired content.

**props:**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.
- `openText` = This prop takes text in to be used for the open drawer toggle container.
- `closeText` = This prop takes text in to be used for the close drawer toggle container.

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

The DarkMode component is a toggle component that will toggle a light/dark mode version of the site.

**props**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.
- `icon` = This prop takes an icon that will be used for the toggle button.
- `text` = This prop takes text that will be used for the toggle button.

Example:

```JavaScript
    <DarkMode icon={<FontAwesomeIcon icon={faCircleHalfStroke} fontSize={20} />} text={'Toggle Dark Mode'} />
```

##### Tooltip

The Tooltip component will add a tooltip to appear when the item is hovered.

**props**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.
- `element` = This prop takes the component that you wish the tooltip to appear over.
- `toottipText` = This is the text that will be shown in the tooltip.
- `position` = This determines the position the tooltip will appear.

Example:

```JavaScript
    <Tooltip
        element={<p>Hover me</p>}
        tooltipText="Tooltip text..."
        position="left"
    />
```

##### Image

The Image component is used to add an image to the site that will match the sites theme.

**props**

- `id` = This prop when given a value, will assign that value and an `id=""` for the html element.
- `className` = This prop when given a value(s), will add them to the `class=""` attribute of the html element.
- `Style` = This prop when given a value(s), will add them to the `style=""` attribute of the html element.
- `src` = This prop takes the src value which will point to the image you want to display.
- `alt` = This prop takes the alt text that you would like to appear when your image is hovered.

Example:

```JavaScript
    <Image
        src="/image.png"
        alt="Image alt text..."
    />
```
