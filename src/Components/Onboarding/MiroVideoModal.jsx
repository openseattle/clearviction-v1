// styles
// import { useModalStyles } from '../../Styles/Onboarding/useModalStyles';

export default function MiroVideoModal() {
    // const classes = useModalStyles();

    const miro = "https://drive.google.com/file/d/1dPIDPah9GbxFhOwi25t_x8YgvPU_33LZ/preview";

    return (
        <div
            // eslint-disable-next-line react/no-unknown-property
            container
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
                src={miro}
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
}
