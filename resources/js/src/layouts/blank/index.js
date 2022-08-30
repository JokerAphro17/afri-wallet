import React from "react";
import useApp from "../../utilities/hook/useApp";

const BlankLayout = ({ children }) => {
    const setting = useApp();
    return (
        <div className="blank-img">
            {children}
        </div>
    );
};

export default BlankLayout;
