import { makeStyles } from "@mui/styles";

const electricityScreenStyle = makeStyles(() => ({
    headContainer: {
        padding: 20,
    },
    mainContainer: {
        border: "1px solid black",
        paddingTop: "20px",
        marginBottom: "20px !important"
    },
    firstDiv: {
        textAlign: "center",
        "& img": {
            width: "24%"
        },
        "& p": {
            fontSize: "14px",
        }
    },
    linkColor: {
        "& p": {
            color: "#551A8B",
            cursor: "pointer"
        }
    },
    midDiv: {
        background: "#efeaea",
        padding: "5px",
        margin: "0px 85px"
    },
    traiffDiv: {
        background: "#c4e1ed",
        margin: "0px 97px !important"
    },
    lastContainer: {
        margin: "0px 102px !important",
        borderRadius: "10px"
    },
    costText: {
        background: "#9d9dd7",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        paddingLeft: "10px",
        "& p": {
            fontSize: "12px",
            color: "#fff"
        }
    },
    costContainer: {
        background: "#c4e1ed",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        padding: "10px 0px 10px 20px"
    },
    costContainer1: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "7px",
        "& :first-child": {
            margin: "0px",
            fontWeight: "900",
            fontSize: "23px"
        },
        "& :nth-child(2)": {
            margin: "0px",
            paddingTop: "5px",
            opacity: "0.5"
        }
    },
    costContainer2: {
        display: "flex",
        flexDirection: "row",
        "& :first-child": {
            margin: "0px",
            color: "#123442",
            fontSize: "16px"
        },
        "& :nth-child(2)": {
            margin: "0px",
            opacity: "0.5"
        }
    },
    container2: {
        marginBottom: "15px",
        "& p": {
            fontSize: "14px",
            lineHeight: "36px",
            margin: "0px 20px 0px 20px",
        }
    },
    container3: {
        background: "#efeaea",
        padding: 20,
        "& p": {
            fontSize: "14px",
        },
        "& :nth-child(2)": {
            textAlign: "end"
        }
    },
    buttonContainer: {
        borderRadius: "15px !important",
        backgroundColor: "#21215a !important",
        color: "#fff !important",
        textTransform: "capitalize !important"
    },
    headText: {
        background: "#21215a",
        color: "#fff",
        fontSize: "14px !important",
        padding: "5px",
        fontWeight: "700 !important"
    },
    mainHeadContainer: {
        justifyContent: "right",
        "& p": {
            fontSize: "15px !important",
            fontWeight: "800 !important",
            padding: "7px 10px 0px 0px"
        }
    },
    filterButton: {
        backgroundColor: "#21215a !important",
        color: "#fff !important",
        textTransform: "capitalize !important",
        fontSize: "14px",
        fontWeight: 600,
        padding: "5px 0px"
    },
    mainText: {
        fontSize: "13px !important"
    },
    container: {
        marginBottom: "10px !important"
    },
  }));
  export default electricityScreenStyle;