import { Grid, Box } from "@material-ui/core";
import { TextWithImage } from "../Subpages/WhyVacate/TextWithImage";
import { WhyVacateHousingStyles } from "../Styles/WhyVacateHousingStyles";

const FactGroup = props => {
    const { fact1, fact2, fact3 } = props;
    const classes = WhyVacateHousingStyles();
    return (
        <Box>
            <Grid className={classes.containerStyles} container>
                <TextWithImage img={fact1.graphic} header={fact1.title} text={fact1.text} cols={4} />
                <TextWithImage img={fact2.graphic} header={fact2.title} text={fact2.text} cols={4} />
                <TextWithImage img={fact3.graphic} header={fact3.title} text={fact3.text} cols={4} />
            </Grid>
        </Box>
    );
};

export default FactGroup;
