import { Button, ButtonGroup, useMediaQuery } from "@mui/material";

const ResponsiveJumpButtonGroup = ({ links }) => {
    const matches = useMediaQuery("(min-width:600px)");
    return (
        <>
            <ButtonGroup
                orientation={`${matches ? "horizontal" : "vertical"}`}
                color="primary"
                variant="text"
                fullWidth
            >
                {links.map((link, idx) => (
                    <Button key={idx} href={`#${link.url}`}>
                        {link.linkName}
                    </Button>
                ))}
            </ButtonGroup>
        </>
    );
};

export default ResponsiveJumpButtonGroup;
