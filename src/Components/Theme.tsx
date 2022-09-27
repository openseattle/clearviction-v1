import { createTheme, Theme } from '@mui/material/styles';

const HEADING_FONT_FAMILY = 'Sintony';
const HEADING_FONT_STYLE = 'sans-serif';
const BODY_FONT_FAMILY = 'Inter';

declare module '@mui/styles' {
    interface DefaultTheme extends Theme {}
}

const theme = createTheme({
    spacing: 8,
    palette: {
        mode: "light",
        primary: {
            light: "#A7B5CC",
            main: "#4E6C99",
            dark: "#2F3554",
            contrastText: "#ffffff",
        },
        secondary: {
            light: "#FFEEA3",
            main: "#FFD200",
            contrastText: "#000000",
        },
        error: {
            main: "#DF1F1F",
        },
        info: {
            main: "#007CFF",
        },
        success: {
            main: "#2A8613",
        },
        text: {
            primary: "#000000",
            secondary: "#4E6C99",
        },
    },
    typography: {
        fontFamily: BODY_FONT_FAMILY,
        button: {
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "1px",
        },
    },
});

theme.components = {
    MuiTypography: {
        styleOverrides: {
            h1: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "normal",
                fontSize: "86px",
                letterSpacing: "-1.5px",
                lineHeight: "95px",
                [theme.breakpoints.down('sm')]: {
                    fontSize: "64px",
                    lineHeight: "72px",
                },
            },
            h2: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "normal",
                fontSize: "56px",
                letterSpacing: "-0.5px",
                lineHeight: "72px",
                [theme.breakpoints.down('sm')]: {
                    fontSize: "48px",
                    lineHeight: "64px",
                },
            },
            h3: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "normal",
                fontSize: "45px",
                letterSpacing: "0px",
                lineHeight: "57px",
            },
            h4: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "bold",
                fontSize: "32px",
                letterSpacing: "0.25px",
                lineHeight: "40px",
            },
            h5: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "bold",
                fontSize: "22px",
                letterSpacing: "0px",
                lineHeight: "25px",
            },
            h6: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "bold",
                fontSize: "19px",
                letterSpacing: "0.15px",
                lineHeight: "23px",
            },
            subtitle1: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "normal",
                fontSize: "22px",
                letterSpacing: "0.15px",
                lineHeight: "30px",
            },
            subtitle2: {
                fontFamily: HEADING_FONT_FAMILY,
                fontStyle: HEADING_FONT_STYLE,
                fontWeight: "normal",
                fontSize: "20px",
                letterSpacing: "0.1px",
                lineHeight: "28px",
                [theme.breakpoints.down('md')]: {
                    fontSize: "18px",
                    lineHeight: "22px",
                },
            },
            body1: {
                fontWeight: "normal",
                fontSize: "20px",
                letterSpacing: "0.5px",
                lineHeight: "28px",
                [theme.breakpoints.down('sm')]: {
                    fontSize: "16px",
                    lineHeight: "22px",
                },
            },
            body2: {
                fontWeight: "normal",
                fontSize: "18px",
                letterSpacing: "0.25px",
                lineHeight: "26px",
                [theme.breakpoints.down('sm')]: {
                    fontSize: "14px",
                    lineHeight: "20px",
                },
            },
    
            caption: {
                fontWeight: "lighter",
                fontSize: "14px",
                letterSpacing: "0.4px",
                lineHeight: "17px",
            },
            overline: {
                fontWeight: "lighter",
                fontSize: "12px",
                letterSpacing: "1.5px",
                lineHeight: "15px",
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            colorPrimary: {
                backgroundColor: theme.palette.primary.dark,
            },
        },
    },
    MuiDrawer: {
        styleOverrides: {
            paper: {
                backgroundColor: theme.palette.primary.dark,
                width: "250px",
                color: "white",
            },
        },
    },
    MuiLink: {
        styleOverrides: {
            underlineHover: {
                textDecoration: "underline",
            },
        },
    },
    MuiTabs: {
        styleOverrides: {
            root: {
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            },
            indicator: {
                height: 0,
            },
        },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                fontSize: 14,
                backgroundColor: theme.palette.primary.light,
            },
            selected: {
                color: theme.palette.primary.dark,
                backgroundColor: "white",
            },
        },
    },
    MuiAccordion: {
        styleOverrides: {
            root: {
                border: `1px solid ${theme.palette.primary.light}`,
                "&$expanded": {
                    margin: 0,
                },
            },
            rounded: {
                borderRadius: 0,
                "&:first-child": {
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                },
                "&:last-child": {
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                },
            },
        },
    },
};

export default theme;
