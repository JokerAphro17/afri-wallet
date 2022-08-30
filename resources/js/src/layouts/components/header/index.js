import React from 'react';
import { Link } from 'react-router-dom';
import useApp from '../../../utilities/hook/useApp';
import BoxMessage from '../box-message';
import AppLanguage from '../language';
import Notification from '../notification';
import ProfileConnecte from '../profile-connecte';
import SideMenu from '../sidemenu';

const Header = (props) => {
    const setting = useApp();
    return (
        <div className="app-header header">
            <div className="container-fluid">
                <div className="d-flex">
                    <a className="header-brand d-md-none" href="index.html">
                        {/* <img src="../../assets/images/brand/logo-3.png" className="header-brand-img mobile-icon" alt="logo" /> */}
                        {/* <img src="../../assets/images/brand/logo.png" className="header-brand-img desktop-logo mobile-logo" alt="logo" /> */}
                    </a>
                    <Link to={"#"} onClick={() => setting.setSidenavToggled(!setting?.sidenavToggled)} aria-label="Hide Sidebar" className="app-sidebar__toggle" data-toggle="sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/></svg>
                    </Link>
                    {/* <div className="header-search d-none d-md-flex">
                        <form className="form-inline">
                            <div className="search-element">
                                <input type="search" className="form-control header-search" placeholder="Search…" aria-label="Search" tabIndex="1"/>
                                <button className="btn btn-primary-color" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                                </button>
                            </div>
                        </form>
                    </div> */}
                    <div className="d-flex ml-auto header-right-icons header-search-icon">
                        {/* <button className="navbar-toggler navresponsive-toggler d-md-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="navbar-toggler-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                        </button> */}
                        {/* <div className="dropdown d-none d-lg-flex">
                            <a className="nav-link icon full-screen-link nav-link-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="fullscreen-button"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="12" opacity=".3" r="3"/><path d="M7 12c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm8 0c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3zM3 19c0 1.1.9 2 2 2h4v-2H5v-4H3v4zM3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm18 0c0-1.1-.9-2-2-2h-4v2h4v4h2V5zm-2 14h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/></svg>
                            </a>
                        </div> */}
                        {/* <!-- FULL-SCREEN --> */}
                        {/* <Notification /> */}
                        {/* <!-- NOTIFICATIONS --> */}
                        {/* <BoxMessage /> */}
                        {/* <!-- MESSAGE-BOX --> */}
                        {/* <AppLanguage /> */}
                        <ProfileConnecte />
                        {/* <SideMenu /> */}
                        {/* <!-- SIDE-MENU --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
