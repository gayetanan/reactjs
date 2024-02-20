import React from "react";

// imparativelly create element
// const props = {className:"test-class"}
// const element = React.createElement("a",props,"i'm anchor");
// JSX
// const jsx = <h1>Hello, from jsx</h1>;

const JsxNestedElement =(
  <React.Fragment>
    <h1>hello nested element</h1>
  </React.Fragment>
)

// render the element
function RenderedElement(){
  return  JsxNestedElement;
}
export  {RenderedElement};