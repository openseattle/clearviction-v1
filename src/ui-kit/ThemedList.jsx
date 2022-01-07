import { Typography } from "@material-ui/core";


const ThemedList = (props) => {
    const {children} = props;
    return (
        <Typography component="ul" style={{listStyleType: "disc", color: "white"}}>
            {children}
        </Typography>

    )
}

export default ThemedList;