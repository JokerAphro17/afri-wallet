import React from "react";
import { Outlet } from "react-router-dom";
import { ContainerFrontOffice } from "../components/container";

const WebsiteLayout = (props) => {
    return (
        <ContainerFrontOffice {...props} />
    );
};

export default WebsiteLayout;
