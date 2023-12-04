import React from "react";
import p from './product.module.css';
import CRMTable from "./table/table";
import Search from "./table/searcher/search";
import {faChevronLeft, faChevronRight, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Product = (props) => {

    let DataName = {
        name: 'Danya'
    }

    return (
        <section className={p.productWraper} id='product'>
            <h1>Hello {DataName.name}👋🏼,</h1>
            <div className={p.crmTable}>
                <div className={p.titleTable}>
                    <div className={p.titleItem}>
                        <h1>All customers <br/> <span>Active Members</span></h1>
                    </div>
                    <div>
                        <Search/>
                    </div>
                </div>
                <CRMTable/>
                <div className={p.footerTable}>
                    <div className={p.description}>
                        <p>Showing data 1 to 8 of 256K entries</p>
                    </div>
                    <div className={p.pagination}>
                        <ul>
                            <li className={classNames(p.chevronLeft)}><FontAwesomeIcon icon={faChevronLeft}/></li>
                            <li className={classNames(p.chevronLeft, p.active)}>1</li>
                            <li className={p.chevronLeft}>2</li>
                            <li className={p.chevronLeft}>3</li>
                            <li className={p.chevronLeft}>4</li>
                            <li>...</li>
                            <li className={p.chevronLeft}>40</li>
                            <li className={p.chevronLeft}><FontAwesomeIcon icon={faChevronRight}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;