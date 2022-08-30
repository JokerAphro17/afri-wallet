import React from 'react';

const Notification = (props) => {
    return (
        <div className="dropdown d-none d-md-flex notifications">
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
    );
}

export default Notification;
