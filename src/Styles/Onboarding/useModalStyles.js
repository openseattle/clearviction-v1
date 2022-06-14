import { makeStyles } from "@material-ui/core";

export const useModalStyles = makeStyles((theme) => ({
    mainModal: {
        overflowY: 'auto',
        height: 'auto',
    },
    modalStyle: {
        width: '80%',
        backgroundColor: 'white',
        margin: '20px auto',
        padding: "50px",
    },
    modalContainer: {
        backgroundColor: 'white',
        boxShadow: 24,
        padding: "75px",
    },
    videoContainer: {
        overflowY: 'auto',
        backgroundColor: 'white',
    },
    contentStyle: {
        margin: theme.spacing(3),
        maxWidth: '1000px',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px', 
        padding: 0,
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
        fontSize: "18px",
        fontWeight: "bold",
        lineHeight: 2.7,
    }

}))