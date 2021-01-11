import React from "react";

function Links(props) {
    // const renderLinks = prop.links.map((link) => {
    //     <a href = {link}>  </a>
    // })
    // console.log(props)
    return (
        <div>
        <h3>Links</h3>
        <a href={props.github}> {props.github} </a>
        <a href={props.linkedin}> {props.linkedin} </a>
        </div>
    )
}
export default Links;
