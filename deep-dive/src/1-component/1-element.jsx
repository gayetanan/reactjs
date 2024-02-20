import React, { createElement } from "react";

// imparativelly create element
// const props = {className:"test-class"}
// const element = React.createElement("a",props,"i'm anchor");

// JSX
// const jsx = <h1>Hello, from jsx</h1>;

const JsxMulElement = (
  <React.Fragment>
    <h1>hello nested element</h1>
    <h2>ok....</h2>
  </React.Fragment>
)

export  {JsxMulElement};