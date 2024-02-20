import { createElement } from "react";
// challenge create a navbar with
//ul and 3 li using both create element and JSX;

// const navbarElement = (createElement("nav",null,
//  [createElement("h1",{},"ok."),
//  createElement("ul",null,
//   [createElement("li",{},"Home"),createElement("li",{},"About"),createElement("li",{},"Menu")]
//   )]
// ))

const navbarElement = (
  <nav>
    <h1>OK.</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
    </ul>
  </nav>
);

export default navbarElement;
