import React, { ReactNode } from "react";
import "./Container.css";

type PropsWithChildren<P> = P & {
  children?: ReactNode;
};

export const Container = ({ children }: PropsWithChildren<any>) => {
  return <div className={"Container"}>{children}</div>;
};
