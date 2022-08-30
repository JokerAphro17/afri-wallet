import React from 'react';

const BoxMessage = (props) => {
    return (
        <div className="dropdown d-none d-md-flex message">
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
    );
}

export default BoxMessage;
