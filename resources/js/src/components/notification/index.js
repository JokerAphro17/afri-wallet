import React from "react";
import { toast, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ToastContent from "./ToastContent";
import { AlertCircle, Bell, Check, Info, Minus } from "react-feather";

// toast.configure();

export const basicNotif = (title, message, status = "secondary") => {
    toast(
        <ToastContent
            title={title}
            message={message}
            // icon={() => <Bell size={20} />}
            status={status}
        />,
        {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 5000,
            closeButton: true,
        }
    );
};

export const successNotif = (title, message, status = "success") => {
    toast.success(
        <ToastContent
            title={title}
            message={message}
            // icon={() => <Check size={20} />}
            status={status}
        />,
        {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 5000,
            closeButton: true,
        }
    );
};

export const errorNotif = (title, message, status = "danger") => {
    toast.error(
        <ToastContent
            title={title}
            message={message}
            // icon={() => <Minus size={20} />}
            status={status}
        />,
        {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 5000,
            closeButton: true,
        }
    );
};

export const warningNotif = (title, message, status = "warning") => {
    toast.warn(
        <ToastContent
            title={title}
            message={message}
            // icon={() => <AlertCircle size={20} />}
            status={status}
        />,
        {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 5000,
            closeButton: true,
        }
    );
};

export const infoNotif = (title, message, status = "primary") => {
    toast.info(
        <ToastContent
            title={title}
            message={message}
            // icon={() => <Info size={20} />}
            status={status}
        />,
        {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 5000,
            closeButton: true,
        }
    );
};
