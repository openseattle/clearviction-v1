const GA_MEASUREMENT_ID = "UA-215117449-1";

export function trackPageview (pageTitle) {
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", "page_view", {
            page_title: pageTitle,
            page_location: window.location.href,
            page_path: window.location.pathname,
            send_to: GA_MEASUREMENT_ID,
        });
    };
}

export function trackClick (clickedText) {
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", "click", {
            event_label: clickedText,
        });
    };
}
