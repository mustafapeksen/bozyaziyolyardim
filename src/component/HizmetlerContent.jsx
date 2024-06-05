import React from "react";

// HizmetlerContent component to display individual service content
function HizmetlerContent(props) {
    return (
        <div id={"hizmetler-" + props.id}>
            {/* Display the image with the provided source and alt text */}
            <img src={props.src} alt={props.name} />
            {/* Display the service name as a link */}
            <h3>
                <a href="/hizmetlerimiz">{props.name}</a>
            </h3>
        </div>
    );
}

export default HizmetlerContent;
