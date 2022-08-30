import React, { useEffect, useState } from 'react';
import LogoFront from '../../../components/logo/LogoFront';

const UserHeader = (props) => {
    // useEffect(() => {
    //     window.addEventListener("scroll", handleNavigation);
    //     return () => {
    //         window.removeEventListener("scroll", handleNavigation);
    //     };
    // }, []);

    // const handleNavigation = (event) => {
    //     console.log("event :>> ", event);
    // };

    return (
        <>
        <div id="Header_wrapper">
            <header id="Header">
                <div id="Top_bar" className='is-sticky'>
                    <div className="container-fluid h-100">
                        <div className="column one">
                            <div className="top_bar_left clearfix">
                                <LogoFront />
                                <div className="menu_wrapper">
                                    <nav id="menu">
                                        <ul id="menu-menu-left" className="menu menu-main menu_left">
                                            <li className="current-menu-item">
                                                <a href="index.html"><span>Accueil</span></a>
                                            </li>
                                            <li>
                                                <a href="news-and-events.html"><span>Crypto</span></a>
                                            </li>
                                            <li>
                                                <a href="category_page.html"><span>Tendance</span></a>
                                            </li>
                                        </ul>
                                        <ul id="menu-menu-right" className="menu menu-main menu_right">
                                            <li>
                                                <a href="#"><span>A propos</span></a>
                                            </li>
                                            <li>
                                                <a href="documents.html"><span>Echange</span></a>
                                            </li>
                                            <li>
                                                <a href="city-hall.html"><span>Code Paris Sportif</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className='btn'><span>Connexion</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <a className="responsive-menu-toggle" href="#">
                                        <i className="icon-menu-fine"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </>
    );
}

export default UserHeader;
