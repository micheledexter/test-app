import React from "react";
import clsx from "clsx";
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Dashboard = ({ className, children }: Props) => {
  const classes = useStyles();

  return <div className={clsx(className, classes.root)}>{children}</div>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "initial",
    },
  })
);
