# 13 Candle Bar

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Technologies used:

- Next.js (app router)
- TypeScript
- Tailwind CSS
- Strapi CMS

## Vision

E-commerce website for the 13 Candle Bar online store

## Project Name

13 Candle Bar

## Project Goal

Attracting new customers and selling goods through the online store

## Target Audience

- Age: 20-45+
- Gender: Female

## Product Scope

Development of a multi-page e-commerce website for the 13 Candle Bar, whose main
field of activity is the sale of flavored products online

### Accessibility

- Intuitive design.
- Mobile-friendly.

### Performance

- Web resource available for any internet connection.

### Supported Languages

- Ukrainian
- English

### Design

[Design Layout on Figma](https://www.figma.com/file/8TJ2ei6yVHA8S8vciTGkmm/13-Candles?node-id=246%3A3772&mode=dev)

---

## 🥁 Getting Started

1. **Clone the repo**

```bash
git@github.com:SoftRyzen-internship/13candles-frontend.git

```

2. **Install dependencies** It's recommended to use npm:

```
npm install
```

3. **Run the project**

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

> Attention! The project structure is not final and can be changed at any time.

**💁‍♀️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── layout
    ├── Header
        ├── index.ts
        ├── Header.tsx
    ├── Footer
        ├── index.ts
        ├── Footer.tsx
```

</details>

---

**💁‍♀️ Reusable css classes should be placed in the `app` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**💁‍♀️ Description of object structure**

<details>

<summary><b>💡 Structure: </b></summary>

<br/>

```

|-- components -> folder with components
  |-- NameComponent -> folder for a component
    |-- NameComponent.tsx -> main component
    |-- NameComponent.module.css -> css styles for the component
    |-- types.ts -> file for the component types
    |-- index.ts -> file for re-export

|-- components/ui -> folder with reusable components
  |-- NameComponent -> folder for a component
    |-- NameComponent.tsx -> main component
    |-- NameComponent.module.css -> css styles for the component
    |-- types.ts -> file for the component types
    |-- index.ts -> file for re-export

|-- sections -> folder with pages
  |--NamePage -> folder with certain page sections
    |-- NameSectionComponent -> folders for each section component
      |-- NameSectionComponent.tsx -> main section component
      |-- NameSectionComponent.module.css -> css styles for the section component
      |-- index.ts -> file for re-export

|-- layout -> components that are used as a main template
|-- app -> pages and routing
|-- public -> static files

<!-- You can create these folders already in work -->
|-- data -> data for the project ( from graphql, json, etc.)
|-- hooks -> custom users hooks
|-- types -> types for data
|-- utils -> helpers, functions, etc.
```

</details>

---

## Internationalization

If you want to add new text data and use it, create json files with same names
inside 'messages' directory in every folder with locale name

```
├── app
  ├── dictionaries
    ├── en
      ├── home.json
    ├── uk
      ├── home.json
```

❗️Then spread file to messages object inside lib/dictionary.ts file to merge
your separate file into one json.

If you need to get access to translation file, get lang as a param into
component and pass it through async function getDictionary. This function return
a key from json as an object and you can use it as a simple object and put it as
a props in children component.

```
const { about } = await getDictionary(lang);
```

```
<h1>{about.title}</h1>
```

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API. This is example of API for
component `Heading`

- ### Heading (example)

| Prop          | Default   | Description                                     |
| ------------- | --------- | ----------------------------------------------- |
| `tag`         | `h2`      | choose the tag of title you'd need: `h1` - `h3` |
| `variant`     | `primary` | `main`, `primary`, `secondary`, `tertiary`      |
| `className`   | `''`      | add custom or additional css class you'd need   |
| `children`    | —         | required, any content                           |
| `data-shadow` | —         | add text as a shadow decoration of the element  |

- ### Logo

| Prop        | Default  | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| `position`  | `header` | place, where logo used                        |
| `aria`      | `''`     | logo aria-label                               |
| `className` | `''`     | add custom or additional css class you'd need |

- ### ContactLink

| Prop        | Default     | Description                                                 |
| ----------- | ----------- | ----------------------------------------------------------- |
| `href`      | —           | required, href for a link                                   |
| `icon`      | —           | required, css className which should be used in globals.css |
|             |             | to create a decor icon                                      |
| `text`      | —           | required, any text content                                  |
| `className` | `undefined` | add custom or additional css class you'd need               |

- ### CategoryCard

| Prop        | Default     | Description                                    |
| ----------- | ----------- | ---------------------------------------------- |
| `href`      | —           | required, href for a link                      |
| `text`      | —           | required, any text content                     |
| `image`     | —           | required, object with src and alt for an image |
| `className` | `undefined` | add custom or additional css class you'd need  |

- ### ExternalLink

A link component that is created with tag "a" and has such attributes as
rel="noopener noreferrer nofollow" and target="\_blank". Additionally, there is
a decorative icon in the component.

| Prop        | Default | Description                                                                        |
| ----------- | ------- | ---------------------------------------------------------------------------------- |
| `href`      | —       | Required, href for a link                                                          |
| `icon`      | —       | Optional, css className which should be used in globals,css to create a decor icon |
| `text`      | —       | Required, any text content                                                         |
| `className` | `''`    | Optional, add custom or additional css class you'd need                            |

- ### `Button`

| Prop         | Default | Description                                                                                          |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------- |
| `tag`        | `a`     | Choose the tag for your button: `a`, `button`. By default, it's a hyperlink (`a`).                   |
| `label`      | —       | Required. The text of the button.                                                                    |
| `href`       | —       | Optional. If provided, the button will perform a smooth scroll to the specified section on the page. |
| `className`  | —       | Optional. Add a custom or additional CSS class if needed.                                            |
| `buttonType` | —       | Optional. Define the type of the button (`button`, `submit`). Can be used with `button` .            |
| `disabled`   | —       | Optional. Determine if the button is disabled. Can be used with `button`.                            |
| `onClick`    | —       | Optional. A callback to be triggered when the button is clicked. Can used with both `a` and `button` |

- ### Slider

| Prop                    | Default          | Description                                                                      |
| ----------------------- | ---------------- | -------------------------------------------------------------------------------- |
| `className`             | `''`             | Optional, add custom or additional css class you'd need                          |
| `id`                    | —                | Required, id for the slider                                                      |
| `element`               | —                | Required, Functional Component that is rendered inside each slide                |
| `data`                  | `[]`             | Required, data that is used inside the Component you provided via "element" prop |
| `isLoop`                | `false`          | Optional, set to true to enable continuous loop mode                             |
| `isAutoplay`            | `false`          | Optional, set to true to enable autoplay                                         |
| `isPagination`          | `false`          | Optional, set to true to enable pagination                                       |
| `isInteractive`         | `false`          | Optional, set to true to enable swipe on touch and grabcursor                    |
| `isFadeEffect`          | `false`          | Optional, set to true to enable fade effect                                      |
| `isNavigation`          | `false`          | Optional, set to true to enable navigation                                       |
| `navigationBreakpoints` | `{               |                                                                                  |
|                         | isMobile: true,  | set to false to disable navigation on mobile                                     |
|                         | isTablet: true,  | set to false to disable navigation on tablet                                     |
|                         | isDesktop: true, | set to false to disable navigation on desktop                                    |
|                         | }`               | (Is is required to provide options for all screens                               |
|                         |                  | if you want to provide customized breakpoints)                                   |

- ### `SideMenu`

| Prop           | Default | Description                                               |
| -------------- | ------- | --------------------------------------------------------- |
| `links`        | `[]`    | Required. Array of navigations links.                     |
| `btnAriaOpen`  | —       | Required. Aria text when menu opened.                     |
| `btnAriaClose` | —       | Required. Aria text when menu closed.                     |
| `className`    | `''`    | Optional. Add a custom or additional CSS class if needed. |

- ### `NavLinks`

| Prop        | Default | Description                                               |
| ----------- | ------- | --------------------------------------------------------- |
| `links`     | `[]`    | Required. Array of navigation links.                      |
| `className` | `''`    | Optional. Add a custom or additional CSS class if needed. |

- ### BusinessLink

| Prop        | Default | Description                                             |
| ----------- | ------- | ------------------------------------------------------- |
| `text`      | —       | Required, any text content                              |
| `isIcon`    | `false` | Optional, set true to use decor icon                    |
| `onClick`   | —       | Optional, if you need onClick                           |
| `className` | `''`    | Optional, add custom or additional css class you'd need |

- ### MenuButton

| Prop           | Default | Description                                             |
| -------------- | ------- | ------------------------------------------------------- |
| `isOpen`       | `-`     | Required, is menu open                                  |
| `onClick`      | —       | Required, toggle menu                                   |
| `btnAriaOpen`  | —       | Required. Aria text when menu opened.                   |
| `btnAriaClose` | —       | Required. Aria text when menu closed.                   |
| `className`    | `''`    | Optional, add custom or additional css class you'd need |

- ### `MobileMenu`

| Prop                 | Default | Description                                           |
| -------------------- | ------- | ----------------------------------------------------- |
| `links`              | `[]`    | Required. Array of navigation links.                  |
| `btnAriaOpen`        | —       | Required. Aria text when menu opened.                 |
| `btnAriaClose`       | —       | Required. Aria text when menu closed.                 |
| `businessText`       | —       | Required. Business link text                          |
| `languageButtonText` | -       | Required, the language applied by clicking the button |
| `toHomePage`         | -       | Required, homepage nav link                           |

- ### TranslationSwitcher

| Prop         | Default | Description                                             |
| ------------ | ------- | ------------------------------------------------------- |
| `lang`       | -       | Required. Current locale 'uk' or 'en'                   |
| `buttonText` | -       | Required. Text for button that switch website language  |
| `className`  | `''`    | Optional, add custom or additional css class you'd need |

- ### Header

Header is a common component for all pages and located at Layout. You can
control which component should appear inside the header on each page.

| Prop                 | Default | Description                                                            |
| -------------------- | ------- | ---------------------------------------------------------------------- |
| `sidePanelMenu`      | -       | Required. Object of buttons aria text used inside SideMenu component   |
| `nav`                | -       | Required. Array of links used inside SideMenu component                |
| `mobileMenu`         | -       | Required. Object of buttons aria text used inside MobileMenu component |
| `toHomePage`         | -       | Required. Link to Home page                                            |
| `languageButtonText` | -       | Required. Text for button that switch website language                 |
| `logoAriaLabelText`  | -       | Required. Aria label text used inside Logo component                   |
| `forBusinesBtnText`  | -       | Required. Text for button used in BusinessLink component               |
| `basketAriaLabel`    | -       | Required. Aria label text used inside BasketButton component           |

---
