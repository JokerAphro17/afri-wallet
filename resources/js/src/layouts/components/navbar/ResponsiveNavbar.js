import React from 'react';

export const ResponsiveNavbar = (props) => {
    return (
        <>
        <div className="mb-1 navbar navbar-expand-lg  responsive-navbar navbar-dark d-md-none bg-white">
            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                <div className="d-flex order-lg-2 ml-auto">
                    <div className="dropdown d-sm-flex">
                        <a href="#" className="nav-link icon" data-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        </a>
                        <div className="dropdown-menu header-search dropdown-menu-left">
                            <div className="input-group w-100 p-2">
                                <input type="text" className="form-control " placeholder="Search...."/>
                                <div className="input-group-append ">
                                    <button type="button" className="btn btn-primary ">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- SEARCH --> */}
                    <div className="dropdown d-md-flex">
                        <a className="nav-link icon full-screen-link nav-link-bg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="fullscreen-button"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="12" opacity=".3" r="3"/><path d="M7 12c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm8 0c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3zM3 19c0 1.1.9 2 2 2h4v-2H5v-4H3v4zM3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm18 0c0-1.1-.9-2-2-2h-4v2h4v4h2V5zm-2 14h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/></svg>
                        </a>
                    </div>
                    {/* <!-- FULL-SCREEN --> */}
                    <div className="dropdown d-md-flex notifications">
                        <a className="nav-link icon" data-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z" opacity=".3"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
                            <span className="pulse1 bg-success"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <div className="notifications-menu">
                                <a className="dropdown-item d-flex pb-4" href="#">
                                    <span className="avatar mr-3 br-3 align-self-center avatar-md cover-image bg-primary brround">
                                        <i className="fe fe-mail"></i></span>
                                    <div>
                                        <span className="font-weight-bold"> Commented on your post </span>
                                        <div className="small text-muted d-flex">
                                            3 hours ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-4" href="#">
                                    <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-secondary brround">
                                        <i className="fe fe-download"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold"> New file has been Uploaded </span>
                                        <div className="small text-muted d-flex">
                                            5 hour ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-4" href="#">
                                    <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-warning brround">
                                        <i className="fe fe-user"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold"> User account has Updated</span>
                                        <div className="small text-muted d-flex">
                                            20 mins ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-4" href="#">
                                    <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-info brround">
                                        <i className="fe fe-shopping-cart"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold"> New Order Recevied</span>
                                        <div className="small text-muted d-flex">
                                            1 hour ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-4" href="#">
                                    <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-danger brround">
                                        <i className="fa fa-commenting-o"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold"> 3 New Comments</span>
                                        <div className="small text-muted d-flex">
                                            1 day ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-4" href="#">
                                    <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-success brround">
                                        <i className="fe fe-server"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold">Server Rebooted</span>
                                        <div className="small text-muted d-flex">
                                            2 hour ago
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item text-center">View all Notification</a>
                        </div>
                    </div>
                    {/* <!-- NOTIFICATIONS --> */}
                    <div className="dropdown d-md-flex message">
                        <a className="nav-link icon text-center" data-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/></svg>
                            <span className="nav-unread badge badge-danger badge-pill pulse">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <div className="message-menu">
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/1.jpg"></span>
                                    <div>
                                        <strong>Madeleine</strong> Hey! there I' am available....
                                        <div className="small text-muted">
                                            3 hours ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/12.jpg"></span>
                                    <div>
                                        <strong>Anthony</strong> New product Launching...
                                        <div className="small text-muted">
                                            5 hour ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/4.jpg"></span>
                                    <div>
                                        <strong>Olivia</strong> New Schedule Realease......
                                        <div className="small text-muted">
                                            45 mintues ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/15.jpg"></span>
                                    <div>
                                        <strong>Sanderson</strong> New Schedule Realease......
                                        <div className="small text-muted">
                                            2 days ago
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item text-center">See all Messages</a>
                        </div>
                    </div>
                    {/* <!-- MESSAGE-BOX --> */}
                    <div className="dropdown d-md-flex country-selector">
                        <a href="#" className="d-flex nav-link icon leading-none" data-toggle="dropdown" aria-expanded="true">
                            <img src="../../assets/images/flags/us_flag.jpg" alt="img" className="mr-2 align-self-center"/>
                            <div>
                                <strong className="text-dark fs-13">English</strong>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <a href="#" className="dropdown-item d-flex pb-3">
                                <img src="../../assets/images/flags/french_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/>
                                <div>
                                    <strong>French</strong>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item d-flex pb-3">
                                <img src="../../assets/images/flags/germany_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/>
                                <div>
                                    <strong>Germany</strong>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item d-flex pb-3">
                                <img src="../../assets/images/flags/italy_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/>
                                <div>
                                    <strong>Italy</strong>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item d-flex pb-3">
                                <img src="../../assets/images/flags/russia_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/>
                                <div>
                                    <strong>Russia</strong>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item d-flex pb-3">
                                <img src="../../assets/images/flags/spain_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/>
                                <div>
                                    <strong>Spain</strong>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

