import {
  Tabs,
  Tab,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({}));

const TabPanelGroup = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const {tabs} = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab.index} label={tab.label} />
        ))}
      </Tabs>

      {tabs.map((tab) => (
        <TabPanel key={tab.index} value={value} index={tab.index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabPanelGroup;
