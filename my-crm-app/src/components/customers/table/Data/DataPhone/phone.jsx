import React from "react";
import p from "./phone.module.css"

const Phone = (props) => {
    return (
        <td className={p.item}>{props.phone}</td>
    );
};

export default Phone;