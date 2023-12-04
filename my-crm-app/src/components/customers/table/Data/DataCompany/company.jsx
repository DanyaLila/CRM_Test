import React from "react";
import c from "./company.module.css"

const Company = (props) => {
    return (
        <td className={c.item}>{props.company}</td>
    );
};

export default Company;