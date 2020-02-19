import React from "react";
import styled from "@emotion/styled";

export const Menu = styled("ul")`
  background-color: white;
  margin: 0;
  padding: 8px;
  list-style: none;

  li {
    margin-top: 16px;
  }

  li:first-of-type {
    margin-top: 0;
  }
`;

function App() {
  return (
    <Menu>
      <div>Hello</div>
    </Menu>
  );
}

export default App;
