import { createElement } from "react";
// challenge create a navbar with
//ul and 3 li using both create element and JSX;

// const navbarElement = (createElement("nav",null,
//   createElement("ul",null,
//   [createElement("li",{},"list-1"),createElement("li",{},"list-1"),createElement("li",{},"list-1")]
//   )
// ))

const navbarElement = (
  <nav>
    <ul>
      <li>list-1</li>
      <li>list-2</li>
      <li>list-3</li>
    </ul>
  </nav>
);

export default navbarElement;
