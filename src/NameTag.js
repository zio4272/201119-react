import React from 'react'
import './NameTag.css';
import Badge from "./Badge.js"

function NameTag(props) {
    let color = props.color;
    let name = props.name;
    let tag = props.tag;

    let color_stat = (<Badge color={color} />);

    let tag_app = (
        <div className="NameTag">
            <img src="./2.gif" />
            {color_stat} /{name} / {tag}
        </div>  
    ) 
    return tag_app;
} 

export default NameTag;