import React from 'react';
import { IconArticles, IconHome } from '../../../components/icones';

export const MainNavbar = ({styleSticky}) => {
    return (
        <>
            <div style={styleSticky} className="sticky">
                <div className="horizontal-main hor-menu clearfix">
                    <div className="horizontal-mainwrapper container clearfix">
                        {/* <!--Nav--> */}
                        <nav className="horizontalMenu clearfix">
                            <ul className="horizontalMenu-list">
                                <li aria-haspopup="true">
                                    <a href="widgets.html" className="">
                                        <IconHome className='hor-icon'/>
                                        Accueil
                                    </a>
                                </li>
                                <li aria-haspopup="true">
                                    <a href="widgets.html" className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="hor-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3"/><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>
                                        A propos
                                    </a>
                                </li>
                                <li aria-haspopup="true">
                                    <a href="widgets.html" className="">
                                        <IconArticles className='hor-icon'/>
                                        Journal Officiel
                                    </a>
                                </li>
                                <li aria-haspopup="true">
                                    <a href="widgets.html" className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="hor-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3"/><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>
                                        Textes Règlementaire
                                    </a>
                                </li>
                                <li aria-haspopup="true">
                                    <a href="widgets.html" className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="hor-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3"/><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>
                                        Insertion
                                    </a>
                                </li>
                                <li aria-haspopup="true">
                                    <a href="widgets.html" className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="hor-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3"/><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>
                                        Ressoures
                                    </a>
                                </li>
                                <li aria-haspopup="true">
                                    <a href="widgets.html" className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="hor-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3"/><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!--Nav--> */}
                    </div>
                </div>
            </div>
        </>
    );
}

