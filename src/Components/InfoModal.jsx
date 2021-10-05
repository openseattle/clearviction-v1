import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import "../CSS/Calculator.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 40 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "52.84vh",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      wordWrap: "break-word",
    },
  })
);

export default function InfoModal({ branch, id }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // let history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleText = () => {
    return (
      <p id="info-modal-link" onClick={handleOpen}>
        I'm not sure
      </p>
    );
  };

  return (
    <div>
      {handleText()}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">
            If you don't know how to answer this question, you may be able to
            locate your records here{" "}
            <a href="https://www.wsp.wa.gov/crime/criminal-history">
              https://www.wsp.wa.gov/crime/criminal-history
            </a>
          </p>
        </div>
      </Modal>
    </div>
  );
}
