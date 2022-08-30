import React from "react";
import useApp from "../../../utilities/hook/useApp";
import Header from "../header";
import PageHeader from "../page-header";
import SideBar from "../sidebar";
// import '../../../index.css';

export const ConainerBackOffice = ({ children, menuElements }) => {
    const setting = useApp();
    return (
        <div className={`app sidebar-mini ${setting?.sidenavToggled ? 'sidenav-toggled' : ''} ${setting?.mode === 'dark' ? 'dark-mode' : ''}`}>
            <div className="page">
                <div className="page-main">
                    <SideBar menuElements={menuElements} />
                    <Header />
                    <div className="app-content">
                        <div className="side-app">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
