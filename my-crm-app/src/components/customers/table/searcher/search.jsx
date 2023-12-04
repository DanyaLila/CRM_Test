import React, { useState } from 'react';
import s from "./search.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = () => {
    return (
        <div className={s.searchContainer}>
            <FontAwesomeIcon icon={faSearch} className={s.searchIcon} />
            <input type="text" placeholder="Search" className={s.searchInput} />
        </div>
    );
}

export default Search;