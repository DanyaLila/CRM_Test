import React from "react";
import c from "./country.module.css"

const Country = (props) => {
    return (
        <td className={c.item}>{props.country}</td>
    );
};

export default Country;