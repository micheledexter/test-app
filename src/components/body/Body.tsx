import React from "react";
import "./Body.css";
import { Container } from "../shared/Container";

export const Body = () => {
  return (
    <body className={"Body"}>
      <Container>
        <div className={"Body-text"}>This is the body</div>
      </Container>
    </body>
  );
};
