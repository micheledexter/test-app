import React, { ReactNode } from "react";
import "./Body.css";
import { Container } from "../shared/Container";

type PropsWithChildren<P> = P & {
  children?: ReactNode;
};

export const Body = ({ children }: PropsWithChildren<any>) => {
  return (
    <body className={"Body"}>
      <Container>
        <div className={"Body-text"}>{children}</div>
      </Container>
    </body>
  );
};
