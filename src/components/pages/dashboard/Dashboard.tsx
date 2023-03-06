import React from "react";
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <div>test</div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "initial",
    },
  })
);
