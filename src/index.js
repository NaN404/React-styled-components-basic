import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Hello from "./Hello";

const HelloBlock = styled.span`
  color: green;
  font-size: 30px;
  background-color: yellow;
`;

class App extends Component {
  render() {
    return <HelloBlock>Hello World, Styled components</HelloBlock>;
  }
}

render(<App />, document.getElementById("root"));
