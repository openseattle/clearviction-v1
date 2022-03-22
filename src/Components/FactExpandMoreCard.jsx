import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";

const FactExpandMoreCard = ({ summary, content }) => {
  const [expanded, setExpanded] = useState();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card style={{ margin: 8 }}>
      <CardActions>
        <CardContent>
          <Typography variant="subtitle2" align="left">
            {summary}
          </Typography>
        </CardContent>

        <IconButton
          style={{ marginLeft: "auto" }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{content}</CardContent>
      </Collapse>
    </Card>
  );
};

export default FactExpandMoreCard;
