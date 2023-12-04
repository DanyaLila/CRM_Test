import React from "react";
import e from "./email.module.css"

const Email = (props) => {
    return (
        <td className={e.item}>{props.email}</td>
    );
};

export default Email;