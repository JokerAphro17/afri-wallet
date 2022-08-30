import React from "react";

const Bar = (props) => {
    return (
        <div className="sidebar sidebar-right sidebar-animate">
            <div className="">
                <a
                    href="#"
                    className="sidebar-icon text-right float-right"
                    data-toggle="sidebar-right"
                    data-target=".sidebar-right"
                >
                    <i className="fe fe-x"></i>
                </a>
            </div>
            <div className="p-3 border-bottom">
                <h5 className="border-bottom-0 mb-0">General Settings</h5>
            </div>
            <div className="p-4">
                <div className="switch-settings">
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">Notifications</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">Show your emails</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">Show Task statistics</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">Show recent activity</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">System Logs</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">Error Reporting</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">
                            Show your status to all
                        </span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                    <div className="d-flex mb-2">
                        <span className="mr-auto fs-15">Keep up to date</span>
                        <label className="custom-switch">
                            <input
                                type="checkbox"
                                name="custom-switch-checkbox"
                                className="custom-switch-input"
                            />
                            <span className="custom-switch-indicator"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="p-3 border-bottom">
                <h5 className="border-bottom-0 mb-0">Overview</h5>
            </div>
            <div className="p-4">
                <div className="progress-wrapper">
                    <div className="mb-3">
                        <p className="mb-2">
                            Achieves
                            <span className="float-right text-muted font-weight-normal">
                                80%
                            </span>
                        </p>
                        <div className="progress h-1">
                            <div
                                className="progress-bar bg-primary w-80 "
                                role="progressbar"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="progress-wrapper pt-2">
                    <div className="mb-3">
                        <p className="mb-2">
                            Projects
                            <span className="float-right text-muted font-weight-normal">
                                60%
                            </span>
                        </p>
                        <div className="progress h-1">
                            <div
                                className="progress-bar bg-secondary w-60 "
                                role="progressbar"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="progress-wrapper pt-2">
                    <div className="mb-3">
                        <p className="mb-2">
                            Earnings
                            <span className="float-right text-muted font-weight-normal">
                                50%
                            </span>
                        </p>
                        <div className="progress h-1">
                            <div
                                className="progress-bar bg-success w-50"
                                role="progressbar"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="progress-wrapper pt-2">
                    <div className="mb-3">
                        <p className="mb-2">
                            Balance
                            <span className="float-right text-muted font-weight-normal">
                                45%
                            </span>
                        </p>
                        <div className="progress h-1">
                            <div
                                className="progress-bar bg-warning w-45 "
                                role="progressbar"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="progress-wrapper pt-2">
                    <div className="mb-3">
                        <p className="mb-2">
                            Toatal Profits
                            <span className="float-right text-muted font-weight-normal">
                                75%
                            </span>
                        </p>
                        <div className="progress h-1">
                            <div
                                className="progress-bar bg-danger w-75"
                                role="progressbar"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="progress-wrapper pt-2">
                    <div className="mb-3">
                        <p className="mb-2">
                            Total Likes
                            <span className="float-right text-muted font-weight-normal">
                                70%
                            </span>
                        </p>
                        <div className="progress h-1">
                            <div
                                className="progress-bar bg-teal w-70"
                                role="progressbar"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bar;
