import { Container, Typography } from "@material-ui/core";
import FactGroup from "../Components/FactGroup";
import timeGraphic from "../Assets/time.svg";
import emails from "../Assets/sending_emails.svg";
import question from "../Assets/question.svg";

const unemployment = {
  graphic: timeGraphic,
  title: "Long unemployment periods",
  text: "Getting back into society may not happen as quickly as most would prefer. Jobs in the manufacturing industry or part-time jobs can help.",
};
const rejected = {
  graphic: emails,
  title: "Rejected Applications",
  text: "These are a common circumstance for people who have previously been convicted of significant criminal offenses.",
};
const education = {
  graphic: question,
  title: "Lack of education or experience",
  text: "Getting a job in a new field can be complicated, especially with convictions in your record.",
};

const WhyVacateEmployment = () => {
  return (
    <Container>
      <Typography variant="h2">Page Title</Typography>
      <Typography variant="subtitle1">Page subtitle</Typography>

      <FactGroup fact1={unemployment} fact2={rejected} fact3={education} />
    </Container>
  );
};

export default WhyVacateEmployment;
