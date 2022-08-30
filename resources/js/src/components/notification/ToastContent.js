import React, { Fragment } from "react";
import { Badge } from "react-bootstrap";

const ToastContent = (props) => {
    const message = props.message;
    const title = props.title;
    const Icon = props.icon;
    const status = props.status;

    return (
        <Fragment>
            <div className="toastify-header">
                <div className="title-wrapper d-flex align-items-center">
                    {Icon ? (
                        <Badge
                            color={status}
                            className="rounded-circle d-flex justify-content-center align-items-center "
                        >
                            <Icon />
                        </Badge>
                    ) : null}
                    <h6 className="toast-title font-weight-bold">{title}</h6>
                </div>
            </div>
            {message ? (
                <div className="toastify-body">
                    <span className="font-weight-light"><small>{message}</small></span>
                </div>
            ) : null}
        </Fragment>
    );
};

export default ToastContent;
