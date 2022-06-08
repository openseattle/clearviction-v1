import { makeStyles } from "@material-ui/core";

export const useModalStyles = makeStyles((theme) => ({
    mainModal: {
        // height: '95%',
        overflowY: 'auto',
        position: 'absolute',
    },
    modalContainer: {
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: "75px",
        paddingLeft: "150px",
        [theme.breakpoints.down("lg")]: {
            top: "100%"
        },
        [theme.breakpoints.down("md")]: {
            paddingLeft: "75px",
            top: "110%"
        },
        [theme.breakpoints.down("sm")]: {
            top: "150%",
            padding: "25px"
        },
        [theme.breakpoints.down("xs")]: {
            top: "185%",
            padding: "15px"
        }
    },
    videoContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: "25px",
        paddingLeft: "25px",
        [theme.breakpoints.down("lg")]: {
            // top: "60%"
        },
        [theme.breakpoints.down("md")]: {
            // paddingLeft: "75px",
            // top: "100%"
            width: '85%',
            height: '85%',
        },
        [theme.breakpoints.down("sm")]: {
            // top: "150%",
            // padding: "25px"
        },
        [theme.breakpoints.down("xs")]: {
            // top: "185%",
            // padding: "15px"
        }
    },
}))