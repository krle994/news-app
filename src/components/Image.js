import fallbackSrc from "../assets/images/placeholder.png";

export default (props) => {
    let src = null;

    const onError = (e) => {
        e.target.onerror = null;
        e.target.src = fallbackSrc;
    };

    src = props.src ? props.src : fallbackSrc;

    return <img {...props} src={src} alt={props.alt} onError={onError} />;
};
