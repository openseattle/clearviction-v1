import { useState } from "react";

{
    /* if using video from url */
}

// const src = "url goes here";

const DonationVideo = () => {
    return (
        <video controls width="100%">
            <source src={src} type="video/mp4" />
            Sorry, your browswer doesn't support embedded videos
        </video>
    );
};

{
    /* if using video from youtube */
}

const src = "youtube url goes here";

const DonationVideo2 = () => {
    return (
        // copy embed code from youtube site, will look like this
        <iframe width="560" height="315" src={src} title="Youtube Player" frameBorder="0" allowFullScreen />
    );
};

{
    /* if using video from local video */
}

const DonationVideo3 = () => {
    const [src, setSrc] = useState("");

    const handleChange = event => {
        try {
            // Get the uploaded file
            const file = event.target.files[0];

            // Transform file into blob URL
            setSrc(URL.createObjectURL(file));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <video src={src} controls width="100%">
                Sorry, your browser doesn't support embedded videos.
            </video>
            <input type="file" onChange={handleChange} />
        </>
    );
};

export default DonationVideo;
