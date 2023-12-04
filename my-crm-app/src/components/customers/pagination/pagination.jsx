import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import p from "./pagination.module.css";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Дополнительная логика для обработки нажатия на номер страницы
        console.log(`Clicked on page ${pageNumber}`);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= 40; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <ul>
            <li className={p.active}><FontAwesomeIcon icon={faChevronLeft} /></li>
            {renderPageNumbers()}
            <li className={p.active}><FontAwesomeIcon icon={faChevronRight} /></li>
        </ul>
    );
};

export default Pagination;
