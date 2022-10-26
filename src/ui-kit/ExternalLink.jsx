import { Link } from "@mui/material";
import { OpenInNewOutlined } from "@mui/icons-material";

export const ExternalLink = ({ href, children, name = "_blank", className }) => (
    <Link className={className} rel="noopener noreferrer" target={name} href={href} underline="hover">
        {children}
        <OpenInNewOutlined fontSize="inherit" />
    </Link>
);
