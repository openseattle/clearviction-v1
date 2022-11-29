const FindVideoModal = () => {
    const find = "https://drive.google.com/file/d/1TG5iz3ioxMFxNsS1YO8MoKaY9uD-NHjm/preview";

    return (
        <div
            // eslint-disable-next-line react/no-unknown-property
            container="true"
            style={{
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                margin: "auto",
                width: "100%",
                height: "100%",
            }}
        >
            <iframe
                title="miro"
                src={find}
                style={{
                    alignSelf: "center",
                    width: "100%",
                    maxWidth: "900px",
                    height: "100%",
                    maxHeight: "600px",
                }}
                allow="autoplay"
            />
        </div>
    );
};

export default FindVideoModal;
