import React from "react";

function HizmetlerContent(props) {
    return (<div id={"hizmetler-" + props.index}>
        <img src={props.src} alt={props.name} />
        <h3><a href="/hizmetlerimiz">{props.name}</a></h3>
    </div>);
}

export default HizmetlerContent;