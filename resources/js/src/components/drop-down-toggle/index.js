import React from "react";

const DropDownToggle = React.forwardRef(({ className, children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className={className}
    >
        {children}
        {/* &#x25bc; */}
    </a>
));

export default DropDownToggle;
