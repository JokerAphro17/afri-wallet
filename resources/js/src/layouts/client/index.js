import React from "react";
import { ConainerBackOffice, ContainerFrontOffice } from "../components/container";
import Footer from "../components/footer";
import menuClient from "./menu";

const ClientLayout = (props) => {
    return (
        <>
        <ConainerBackOffice {...props} menuElements={menuClient} />
        <Footer />
        </>
    );
};

export default ClientLayout;
