import React from "react";
import d from "./dataName.module.css"

const DataName = (props) => {
    return (
        <td className={d.item}>{props.name}</td>
    );
};

export default DataName;