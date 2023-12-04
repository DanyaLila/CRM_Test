import React from "react";
import s from "./status.module.css"

const Status = (props) => {
    if (props.status === "Active") {
        return (
            <td><span className={s.item}>{props.status}</span></td>
        );
    }else {
        return (
            <td><span className={s.inactive}>{props.status}</span></td>
        );
    }
};

export default Status;