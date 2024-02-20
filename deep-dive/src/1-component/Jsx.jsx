import React from "react";

// imparativelly create element
const props = {className:"test-class"}
const element = React.createElement("a",props,"i'm anchor");

// render the element
function RenderedElement(){
  return element;
}

export  {RenderedElement};