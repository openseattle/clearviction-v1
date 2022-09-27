import { makeStyles } from '@mui/styles';

export const useMod2Styles = makeStyles(theme => ({
    subHeading: {
        color: theme.palette.primary.main,
        fontSize: "64px",
        margin: "0 auto",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(8),
        textAlign: "center",
        paddingLeft: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            fontSize: "40px",
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(6),
            paddingLeft: 0,
            lineHeight: 1.2,
        },
        gridStyle: {
            display: "flex",
            flexDirection: "row",
            margin: "20px auto",
            justifyContent: "space-around",
            textAlign: "center",
            padding: "0 50px",
            [theme.breakpoints.down('md')]: {
                padding: 0,
                flexDirection: "column",
                margin: "auto",
            },
        },
    },
}));
