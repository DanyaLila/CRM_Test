import React from "react";
import b from "./tbody.module.css"
import table from "../table";

const Tbody = (props) => {
    return (
        <table>
            <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.company}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.country}</td>
                <td>{props.status}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Tbody;