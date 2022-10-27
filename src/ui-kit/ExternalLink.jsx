import { Link } from "@mui/material";
import { OpenInNewOutlined } from "@mui/icons-material";

// eslint-disable-next-line import/prefer-default-export
export function ExternalLink({ href, children, name = "_blank", className }) {
    return (
        <Link
            className={className}
            rel="noopener noreferrer"
            target={name}
            href={href}
            underline="hover"
        >
            {children}
            <OpenInNewOutlined fontSize="inherit" />
        </Link>
    );
}
