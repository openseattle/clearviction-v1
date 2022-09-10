import { useState } from "react";
import { trackClick } from "../trackingUtils";
import { Modal, Box, Button, Typography } from "@material-ui/core";

const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "24em",
    backgroundColor: "var(--white)",
    border: "2px solid #000",
    boxShadow: 24,
    padding: 4,
};

const ToolTipModal = props => {
    const [ open, setOpen, ] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        setOpen(true);
        trackClick(props.text);
    };

    return (
        <div data-testid="tooltip-modal-wrapper">
            <Button onClick={handleOpen} style={{ color: "black", textDecoration: "underline", }}>
                <Typography variant="h5">{props.text}</Typography>
            </Button>
            <Modal
                data-testid="tooltip-modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box data-testid="tooltip-content" style={boxStyle}>
                    <Typography id="modal-modal-description" style={{ mt: 2, fontSize: "18px", }}>
                        If you don't know the answer, you may check your criminal record{" "}
                        <a target="_blank" href="https://www.wsp.wa.gov/crime/criminal-history" rel="noreferrer">
                            here
                        </a>
                        .
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ToolTipModal;
