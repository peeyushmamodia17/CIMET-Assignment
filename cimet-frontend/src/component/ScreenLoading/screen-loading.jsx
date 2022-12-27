import React from "react";
import loadingScreenStyle from "./loading-style";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingScreen = (props) => {
  const classes = loadingScreenStyle();
  return (
    props.loading && (
      <div className={classes.screenToo}>
        <Backdrop
          open={props.loading}
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            flexDirection: "column",
          }}
        >
          <div className={classes.textLoader}>
            <img src="/logo.jpg" alt="Electricity" />
          </div>
          <CircularProgress color="secondary" />
        </Backdrop>
      </div>
    )
  );
};

export default LoadingScreen;
