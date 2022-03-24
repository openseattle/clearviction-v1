import {
  Card,
  CardActionArea,
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
      <CardActionArea
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <CardActions>
          <CardContent>
            <Typography variant="subtitle2" align="left">
              {summary}
            </Typography>
          </CardContent>

          <ExpandMore style={{ marginLeft: "auto", marginRight: "0.5em" }} />
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{content}</CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
};

export default FactExpandMoreCard;
