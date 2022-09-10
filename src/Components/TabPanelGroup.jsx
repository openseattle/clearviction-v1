import { Tabs, Tab, Box, makeStyles } from "@material-ui/core";
import { useState } from "react";

const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    tabPanelStyle: {
        backgroundColor: "white",
        color: "black",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
}));

function a11yProps (index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

const TabPanelGroup = props => {
    const classes = useStyles();
    const [ value, setValue, ] = useState(0);
    const { tabs, } = props;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
                {tabs.map(tab => (
                    <Tab className={classes.tabStyle} key={tab.index} label={tab.label} {...a11yProps(tab.index)} />
                ))}
            </Tabs>

            {tabs.map(tab => (
                <TabPanel className={classes.tabPanelStyle} key={tab.index} value={value} index={tab.index}>
                    {tab.content}
                </TabPanel>
            ))}
        </Box>
    );
};

export default TabPanelGroup;
