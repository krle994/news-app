import fallbackSrc from "../assets/images/placeholder.png";

export default (props) => {
    const onError = (e) => {
        e.target.onerror = null;
        e.target.src = fallbackSrc;
    };

    if (!props.src) props.src = fallbackSrc;

    return <img src={props.src} alt={props.alt} onError={onError} {...props} />;
};
