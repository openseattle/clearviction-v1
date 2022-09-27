import { makeStyles } from '@mui/styles';

export const QuestionScreenStyles = makeStyles(theme => ({
    grid: {
        display: "inline-block",
        marginTop: "32px",
        justifyContent: "center",
    },
    header: {
        marginBottom: "16px",
        textAlign: "center",
    },
    body: {
        textAlign: "left",
        color: "black",
    },
    bodyGrid: {
        marginBottom: "72px",
    },
    buttonGrid: {
        paddingBottom: "32px",
        textAlign: "center",
    },
    button: {
        marginBottom: "16px",
    },
    backButton: {
        marginTop: "16px",
        marginBottom: "32px",
        justifyContent: "flex-start",
    },
    progressBar: {
        marginBottom: "16px",
        marginLeft: "5vw",
    },
    list: {
        fontSize: "18px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px",
        },
    },
    dialogImg: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            width: "175px",
            height: "90px",
        },
        [theme.breakpoints.down('md')]: {
            width: "375px",
            height: "150px",
        },
    },
}));
