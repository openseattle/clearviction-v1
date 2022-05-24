import React from "react";
import { Container } from "@material-ui/core";

interface SkipLinkProperties {
    className?: string;

    children: React.ReactElement;
    /**
     * The css query aiding the selection of the
     * container (main, section etc) we want to scroll to;
     */
    skipToH1: string;
    skipToH2: string;
    skipToH3: string;
    skipToH4: string;
    skipToH5: string;
    skipToH6: string;
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
        const container: HTMLElement | null = document.querySelector(props.skipToH1);

        /**
         * tabIndex seems to work well with the general layout of the site
         * Sets outline focus for screen-readers and sigthed alike
         */
        if (container) {
            container.tabIndex = -1;
            container.focus();
            setTimeout(() => container.removeAttribute("tabindex"), 1000);
        }
        if (container === null) {
            const container: HTMLElement | null = document.querySelector(props.skipToH2);
            if(container) {
                container.tabIndex = -1;
                container.focus();
                setTimeout(() => container.removeAttribute("tabindex"), 1000);
            }
        }
        if (container === null) {
            const container: HTMLElement | null = document.querySelector(props.skipToH3);
            if(container) {
                container.tabIndex = -1;
                container.focus();
                setTimeout(() => container.removeAttribute("tabindex"), 1000);
            }
        }
        if (container === null) {
            const container: HTMLElement | null = document.querySelector(props.skipToH4);
            if(container) {
                container.tabIndex = -1;
                container.focus();
                setTimeout(() => container.removeAttribute("tabindex"), 1000);
            }
        }
        if (container === null) {
            const container: HTMLElement | null = document.querySelector(props.skipToH5);
            if(container) {
                container.tabIndex = -1;
                container.focus();
                setTimeout(() => container.removeAttribute("tabindex"), 1000);
            }
        }
        if (container === null) {
            const container: HTMLElement | null = document.querySelector(props.skipToH6);
            if(container) {
                container.tabIndex = -1;
                container.focus();
                setTimeout(() => container.removeAttribute("tabindex"), 1000);
            }
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
    skipToH1: "h1:first-of-type",
    skipToH2: "h4:first-of-type",
    skipToH3: "h4:first-of-type",
    skipToH4: "h4:first-of-type",
    skipToH5: "h5:first-of-type",
    skipToH6: "h6:first-of-type",
};

export default SkipLink;
