import React from "react";

// BlogCard component to display individual blog entries
function BlogCard(props) {
    return (
        <div className="blog-card">
            {/* Display the image */}
            <img src={props.img} alt="Blog Image" />
            {/* Display the title */}
            <h3>{props.title}</h3>
            {/* Display the text */}
            <p>{props.text}</p>
        </div>
    );
}

export default BlogCard;
