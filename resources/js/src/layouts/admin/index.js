import React from "react";
import useApp from "../../utilities/hook/useApp";
import ContainerBackEnd, { ConainerBackOffice } from "../components/container";
import Footer from "../components/footer";
import Bar from "../components/sidemenu/Bar";
import menuAdmin from "./menu";

const AdminLayout = (props) => {
    return (
        <>
            <ConainerBackOffice {...props} menuElements={menuAdmin} />
            <Footer />
        </>
    );
};

export default AdminLayout;
