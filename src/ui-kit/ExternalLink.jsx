import { Link } from "@material-ui/core";
import { OpenInNewOutlined } from "@material-ui/icons";

export const ExternalLink = ({
  href,
  children,
  name = "_blank",
  className,
}) => (
  <Link
    className={className}
    rel="noopener noreferrer"
    target={name}
    href={href}
  >
    {children}
    <OpenInNewOutlined fontSize="inherit" />
  </Link>
);
