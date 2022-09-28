import React from "react";
import { Container } from "@mui/material";

interface SkipLinkProperties {
    className?: string;

    children: React.ReactElement;
    /**
     * The css query aiding the selection of the
     * container (main, section etc) we want to scroll to;
     */
    skipTo: string;
}

const SkipLink: React.FC<SkipLinkProperties> = props => {
    /**
     * On click event for sighted folks
     * 'enter' key works as well
     */
    const onClick = (event: React.SyntheticEvent) => {
        event.preventDefault();
        /**
         * Catch-all 'container' looking for HTML tags
         */
        const container: HTMLElement | null = document.querySelector(props.skipTo);

        /**
         * tabIndex seems to work well with the general layout of the site
         * Sets outline focus for screen-readers and sigthed alike
         */
        if (container) {
            container.tabIndex = -1;
            container.focus();
            setTimeout(() => container.removeAttribute("tabindex"), 1000);
        }
    };

    return React.cloneElement(props.children, { onClick, className: props.className });
};
/**
 * skipTo set as h1 seems to work well with general layout of site
 * Most, if not all, Subpages begin with this hiearchy
 */

SkipLink.defaultProps = {
    className: "skipLink",
    skipTo: "h1:first-of-type",
};

export default SkipLink;
