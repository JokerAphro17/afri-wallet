import React from "react";

const DropDownMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).map(
                        (child) => child?.props?.children
                    )}
                </ul>
            </div>
        );
    }
);

export default DropDownMenu;
