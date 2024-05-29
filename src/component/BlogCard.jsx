import React from "react";

function BlogCard(props) {
    return (<div className="blog-card">
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>);
}

export default BlogCard;