import React from "react";
import h from './sideMenu.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faBox,
    faCircleQuestion,
    faGear,
    faKey,
    faTags,
    faUserTie,
    faWallet
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const SideMenu = (props) => {

    return (
        <section className={h.sidebar} id='sitebar'>

            <div className={h.sideWraper__title}>
                <h1><FontAwesomeIcon icon={faGear}/> Dashboard</h1>
                <p className={h.version}>v.01</p>
            </div>

            <div className={h.sidebar__items}>

                <div className={h.sidebar__item}>
                    <NavLink to="/dashboard" style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "#fff" : "",
                            backgroundColor: isActive ? "#5932EA" : "",
                        };
                    }}><span>
                    <span className={h.icon}><FontAwesomeIcon icon={faKey}/></span>Dashboard
                </span>
                        <span className={h.angle}><FontAwesomeIcon icon={faAngleRight}/></span></NavLink>
                </div>

                <div className={h.sidebar__item}>
                    <NavLink to="/product" style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "#fff" : "",
                            backgroundColor: isActive ? "#5932EA" : "",
                        };
                    }}><span><span className={h.icon}><FontAwesomeIcon icon={faBox}/></span>Product
                </span>
                        <span className={h.angle}><FontAwesomeIcon icon={faAngleRight}/></span></NavLink>
                </div>
                <div className={h.sidebar__item}>
                    <NavLink to="/customers" style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "#fff" : "",
                            backgroundColor: isActive ? "#5932EA" : "",
                        };
                    }}><span><span className={h.icon}><FontAwesomeIcon icon={faUserTie}/></span>Customers</span>
                        <span className={h.angle}><FontAwesomeIcon icon={faAngleRight}/></span></NavLink>
                </div>
                <div className={h.sidebar__item}>
                    <NavLink to="/income" style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "#fff" : "",
                            backgroundColor: isActive ? "#5932EA" : "",
                        };
                    }}><span><span className={h.icon}><FontAwesomeIcon icon={faWallet}/></span>Income</span>
                        <span className={h.angle}><FontAwesomeIcon icon={faAngleRight}/></span></NavLink>
                </div>
                <div className={h.sidebar__item}>
                    <NavLink to="/promote" style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "#fff" : "",
                            backgroundColor: isActive ? "#5932EA" : "",
                        };
                    }}><span><span className={h.icon}><FontAwesomeIcon icon={faTags}/></span>Promote</span>
                        <span className={h.angle}><FontAwesomeIcon icon={faAngleRight}/></span></NavLink>
                </div>
                <div className={h.sidebar__item}>
                    <NavLink to="/help" style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "#fff" : "",
                            backgroundColor: isActive ? "#5932EA" : "",
                        };
                    }}><span><span className={h.icon}><FontAwesomeIcon icon={faCircleQuestion}/></span>Help</span>
                        <span className={h.angle}><FontAwesomeIcon icon={faAngleRight}/></span></NavLink>
                </div>
            </div>

            <div className={h.profile}>
                <div className={h.profile__photo}>
                    <img
                        src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593111703?e=2147483647&v=beta&t=VYkw5GvugUIP8zfh_3puWETBrtdygEUqqaU5fghxkyc"/>
                </div>
                <div className={h.profile__description}>
                    <h2 className={h.profile__name}>{props.name} <br/>
                        <p>Project Manager</p></h2>
                </div>
            </div>

        </section>
    );
};
export default SideMenu;