import { makeStyles } from "@mui/styles";

const loadingScreenStyle = makeStyles(() => ({
  screenToo: {
    top: "50%",
    left: "50%",
    overflow: "hidden",
    width: "100%",
    position: "fixed",
    transform: "translate(-50% , -50%)",
    background: "rgba(256 , 256, 256, 0.6)",
    zIndex: 9999,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    "& .MuiCircularProgress-root": {
      color: "#fcc520",
    },
  },
  textLoader: {
    display: "block",
    color: "#000",
    margin: "0px auto",
    width: "15%",
    "& img": {
      width: "100%",
    },
  },
}));
export default loadingScreenStyle;
