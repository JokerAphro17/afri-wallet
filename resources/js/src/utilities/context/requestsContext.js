// RequestsContext
import React, { createContext, useState } from "react";
import HANDLER_STORAGE from "../../data";
import { REQUESTS } from "../constant/app.constant";

const RequestsContext = createContext(null);

const RequestsProvider = ({ children }) => {
    const [requests, setRequests] = useState(
        HANDLER_STORAGE.GET(REQUESTS, "object")?.data ?? {}
    );

    const isRequestPending = (requestName) => {
        if (
            requests &&
            requests[requestName] &&
            requests[requestName].status === "pending"
        ) {
            return true;
        }
        return false;
    };

    const isRequestSuccess = (requestName) => {
        if (
            requests &&
            requests[requestName] &&
            requests[requestName].status === "success"
        ) {
            return true;
        }
        return false;
    };

    const isRequestFailed = (requestName) => {
        if (
            requests &&
            requests[requestName] &&
            requests[requestName].status === "failed"
        ) {
            return true;
        }

        return false;
    };

    const isRequestDone = (requestName) => {
        if (
            requests &&
            requests[requestName] &&
            ["failed", "success"].indexOf(requests[requestName].status) !== -1
        ) {
            return true;
        }

        return false;
    };

    // status = ['pending', 'success', 'failed']
    const handlerRequests = (requestName, status) => {
        let _requests = { ...(requests ?? {}) };
        _requests[requestName] = status;
        setRequests(_requests);
        HANDLER_STORAGE.SET(REQUESTS, _requests, "object");
    };

    const value = {
        requests,
        isRequestPending,
        isRequestFailed,
        isRequestSuccess,
        isRequestDone,
        handlerRequests,
    };

    return (
        <RequestsContext.Provider value={value}>
            {children}
        </RequestsContext.Provider>
    );
};

export { RequestsProvider, RequestsContext };
