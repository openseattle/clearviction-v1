import { makeStyles } from "@material-ui/core";

export const useGetInvolvedStyles = makeStyles((theme) => ({
  regularContainerStyle: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  CTAButtonContainerStyle: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    justifyContent: "center",
  },
  headingStyle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  volunteerTextStyle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  dividerStyle: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  donationImageStyle: {
    width: "100%",
  },
  partnerImageStyle: {
    width: "100%",
  },
}));
