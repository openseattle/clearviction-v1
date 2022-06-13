import { makeStyles } from "@material-ui/core";

export const useModalStyles = makeStyles((theme) => ({
    mainModal: {
        overflowY: 'auto',
        // maxHeight: "200%"
    },
    modalStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: "50px",
        paddingTop: "25px",
        paddingBottom: "25px",
        maxHeight: "100%"
    },
    modalContainer: {
        position: 'absolute',
        top: '80%',
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
        height: 'auto',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: "25px",
        paddingLeft: "25px",
        [theme.breakpoints.down("md")]: {
            width: '100%',
            // height: '100%',
        },
    },
    contentStyle: {
        // position: 'relative',
        width: "100%",
        heigth: "100%",
        marginLeft: '50px',
        marginTop: '25px',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
        [theme.breakpoints.down("md")]: {
            marginLeft: '75px',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: '125px',
        },
       
    },
    button: {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            textTransform: "capitalize",
            minWidth: "248px",
            maxWidth: "300px",
            height: "48px",
            textAlign: "center",
            float: "right",
            verticalAlign: "middle",
            padding: "auto",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: "50px",
            margin: "auto",
            marginTop: theme.spacing(8),
            fontSize: "18px",
            fontWeight: "bold",
            lineHeight: 2.7,
        }

}))